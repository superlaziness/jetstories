// eslint-disable-next-line import/extensions
import ffmpegworker from '!!file-loader!ffmpeg.js/ffmpeg-worker-mp4.js';

export const useProcessVideo = (onProgress, onFinish, onError) => {
  const processVideo = async (blob, trimState) => {
    const startTrimmerOption = trimState?.startTime
      ? ['-ss', trimState.startTime.toFixed(1)]
      : [];
    const endTrimmerOption = trimState?.endTime
      ? ['-to', (trimState.endTime + 0.15).toFixed(1)]
      : [];
    const arrayBuffer = await blob.arrayBuffer();
    const worker = new Worker(ffmpegworker);
    worker.onmessage = e => {
      const msg = e.data;
      switch (msg.type) {
        case 'ready':
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
          onProgress(msg.data);
          break;
        case 'stderr':
          onError(msg.data);
          break;
        case 'done':
          const newBlob = new Blob([Uint8Array.from(msg.data.MEMFS[0].data)], {
            type: 'video/quicktime'
          });
          onFinish(newBlob);
          break;
        default:
          onProgress('no source');
          break;
      }
    };
  };
  return processVideo;
};
