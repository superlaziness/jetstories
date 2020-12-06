// eslint-disable-next-line import/extensions
import ffmpegworker from '!!file-loader!ffmpeg.js/ffmpeg-worker-webm.js';

const useProcessVideo = ({ resultRef }) => {
  const player = resultRef.current;
  const process = async (blob, trimState) => {
    const startTrimmerOption = trimState?.startTime
      ? ['-ss', trimState.startTime.toFixed(3)]
      : [];
    const endTrimmerOption = trimState?.endTime
      ? ['-to', (trimState.endTime + 0.15).toFixed(3)]
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
            MEMFS: [{ name: 'input.webm', data: arrayBuffer }],
            arguments: [
              ...startTrimmerOption,
              '-i',
              'input.webm',
              ...endTrimmerOption,
              '-copyts',
              '-c:v',
              'vp8',
              '-quality',
              'good',
              'out.webm'
            ]
          });
          break;
        case 'stdout':
          console.log('worker stdout', msg.data);
          break;
        case 'stderr':
          console.log('worker stderr', msg.data);
          break;
        case 'done':
          console.log('worker done', msg.data);
          const newBlob = new Blob([Uint8Array.from(msg.data.MEMFS[0].data)], {
            type: 'video/webm;codecs=vp8'
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
