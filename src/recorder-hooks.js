import { useRef, useState, useEffect } from 'react';

// eslint-disable-next-line import/extensions
import ffmpegworker from '!!worker-file-loader!ffmpeg.js/ffmpeg-worker-webm.js';

export const useRecorder = ({ cameraRef }) => {
  const stream = useRef();
  const [state, setState] = useState('idle');
  const [blob, setBlob] = useState(null);
  const recorder = useRef(null);

  const handleBlob = e => {
    setBlob(e.data);
  };

  const initRecorder = async () => {
    stream.current = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user' },
      audio: true
    });
    recorder.current = new MediaRecorder(stream.current);
    recorder.current.ondataavailable = handleBlob;

    if (cameraRef?.current) {
      console.log('camera', stream.current, cameraRef?.current);
      cameraRef.current.srcObject = stream.current;
    }
  };

  const toggleRecording = () => {
    if (!recorder.current.stop) return;
    if (state !== 'recording') {
      recorder.current.start();
      setState('recording');
    } else {
      recorder.current.stop();
      setState('recorded');
    }
  };

  const clear = () => {
    setState('idle');
    setBlob(null);
  };

  useEffect(() => {
    initRecorder();
  }, [cameraRef]);

  useEffect(() => {
    if (state === 'idle' && cameraRef?.current) {
      if (recorder.current?.state === 'recording') recorder.current?.stop();
      cameraRef.current.srcObject = stream.current;
    }
  }, [state]);

  return {
    state,
    blob,
    toggleRecording,
    clear
  };
};

export const usePreviewTrim = ({ playerRef, blob }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const trimmer = useRef([]);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const looper = e => {
    if (!duration) setDuration(e.target.duration);
    const playingDuration =
      (e.target.duration * trimmer.current[1]) / 100 || e.target.duration;
    const resetTime = (trimmer.current[0] * e.target.duration) / 100 || 0;
    if (e.target.currentTime >= playingDuration) {
      e.target.currentTime = resetTime;
      e.target.play();
    }
  };

  const runPlayer = () => {
    const data = URL.createObjectURL(blob);
    playerRef.current.src = data;
    playerRef.current.play();
    setIsPlaying(true);
  };

  // autorun
  useEffect(() => {
    if (blob && playerRef.current) {
      runPlayer();
    }
  }, [blob]);

  // autoloop
  useEffect(() => {
    if (!playerRef.current) return;
    if (isPlaying && blob) {
      playerRef.current.addEventListener('timeupdate', looper);
    }
    // eslint-disable-next-line consistent-return
    return () => {
      playerRef.current.removeEventListener('timeupdate', looper);
    };
  }, [isPlaying]);

  const trimStartAndPlay = () => {
    console.log('dur', playerRef.current.duration);
    if (playerRef.current.duration === Infinity) return;
    playerRef.current.currentTime =
      (trimmer.current[0] * playerRef.current.duration) / 100;
    playerRef.current.play();
    setStartTime(playerRef.current.currentTime);
    setDuration(playerRef.current.duration);
  };

  const trimEndAndPlay = () => {
    const endTrimTime = (trimmer.current[1] * playerRef.current.duration) / 100;
    playerRef.current.currentTime = endTime - 0.2;
    playerRef.current.play();
    setEndTime(endTrimTime);
    setDuration(playerRef.current.duration);
  };

  const trim = value => {
    if (!isPlaying) return;
    const trimStart =
      value[0] !== trimmer.current[0] && value[1] === trimmer.current[1];
    const trimEnd =
      value[1] !== trimmer.current[1] && value[0] === trimmer.current[0];
    trimmer.current = value;
    if (trimStart) trimStartAndPlay();
    if (trimEnd) trimEndAndPlay();
  };

  return { trim, isPlaying, trimmer: { startTime, endTime, duration } };
};

export const useProcessVideo = ({ resultRef }) => {
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
          // const a = document.createElement('a');
          // a.download = 'video.webm';
          // a.href = URL.createObjectURL(blob);
          // a.style.display = 'none';
          //
          // document.body.appendChild(a);
          // a.click();
          // setTimeout(() => {
          //   document.body.removeChild(a);
          //   URL.revokeObjectURL(a.href);
          // }, 2000);
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
