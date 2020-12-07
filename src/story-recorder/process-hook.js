import { FFMPEGWebworkerClient } from 'ffmpeg-webworker';

export const useProcessVideo = (onProgress, onFinish) => {
  const processVideo = async (blob, trimState) => {
    const startTrimmerOption = trimState?.startTime
      ? `-ss ${trimState.startTime.toFixed(3)} `
      : '';
    const endTrimmerOption = trimState?.endTime
      ? ` -to ${(trimState.endTime + 0.15).toFixed(3)}`
      : '';
    const worker = new FFMPEGWebworkerClient();
    worker.on('onReady', () => {
      worker.inputFile = blob;
      worker.runCommand(
        `${startTrimmerOption}-strict -2 -copyts${endTrimmerOption} -c:v copy out.mp4`,
        67108864
      );
    });
    worker.on('onStdout', msg => {
      onProgress(msg);
    });
    worker.on('onStart', () => {
      onProgress('worker started');
    });
    worker.on('onDone', data => {
      const newBlob = new Blob([data[0].data], { type: 'video/mp4' });
      onFinish(newBlob);
      // unpack to test file
      // const url = URL.createObjectURL(newBlob);
      // const popup = open('', '_blank');
      // popup.location = url;
    });
  };
  return processVideo;
};
