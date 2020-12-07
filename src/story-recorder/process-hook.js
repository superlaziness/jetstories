import { useS3 } from '../aws-hook';

// eslint-disable-next-line import/extensions
import ffmpegworker from '!!file-loader!ffmpeg.js/ffmpeg-worker-mp4.js';

const useProcessVideo = ({ resultRef, onUpdate }) => {
  const player = resultRef.current;
  const { upload } = useS3(resultRef);
  const process = async (blob, trimState) => {
    const startTrimmerOption = trimState?.startTime
      ? ['-ss', trimState.startTime.toFixed(1)]
      : [];
    const endTrimmerOption = trimState?.endTime
      ? ['-to', (trimState.endTime + 0.15).toFixed(1)]
      : [];

    console.log('trimmer option', startTrimmerOption, endTrimmerOption);
    const arrayBuffer = await blob.arrayBuffer();
    const worker = new Worker(ffmpegworker);
    worker.onmessage = e => {
      const msg = e.data;
      switch (msg.type) {
        case 'ready':
          console.log('worker ready');
          worker.postMessage({
            type: 'run',
            MEMFS: [{ name: 'input.mkv', data: arrayBuffer }],
            arguments: [
              '-i',
              'input.mkv',
              ...startTrimmerOption,
              ...endTrimmerOption,
              '-copyts',
              '-vcodec',
              'copy',
              'out.mp4'
            ]
          });
          break;
        case 'stdout':
          console.log('worker stdout', msg.data);
          onUpdate(msg.data);
          break;
        case 'stderr':
          console.log('worker stderr', msg.data);
          onUpdate(msg.data);
          break;
        case 'done':
          console.log('worker done', msg.data);
          const newBlob = new Blob([Uint8Array.from(msg.data.MEMFS[0].data)], {
            type: 'video/quicktime'
          });
          upload({
            name: `${new Date().getTime()}.mp4`,
            file: newBlob
          });
          const data = URL.createObjectURL(newBlob);
          player.src = data;
          player.play();
          console.log('blob', blob);
          break;
        default:
          console.log('default');
          break;
      }
    };
  };
  return process;
};

export default useProcessVideo;
