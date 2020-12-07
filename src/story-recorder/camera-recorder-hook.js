import { useEffect, useRef } from 'react';

const useCameraRecorder = ({
  cameraRef,
  onRecordComplete,
  isRecording,
  onError
}) => {
  const stream = useRef();
  const recorder = useRef(null);

  const handleDateReceive = e => {
    onRecordComplete(e.data);
  };

  const initRecorder = async () => {
    if (typeof MediaRecorder === 'undefined') {
      onError('Browser not supported');
      return;
    }
    if (/Android|Mobile|mobile/i.test(navigator.userAgent)) {
      onError('Browser not supported');
      return;
    }
    stream.current = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'user',
        width: { ideal: 4096 },
        height: { ideal: 2160 }
      },
      audio: true
    });
    recorder.current = new MediaRecorder(stream.current, {
      mimeType: 'video/webm;codecs=H264,pcm'
    });
    recorder.current.ondataavailable = handleDateReceive;

    if (cameraRef?.current) {
      cameraRef.current.srcObject = stream.current;
    }
  };

  useEffect(() => {
    initRecorder();
    return () => {
      stream.current?.getTracks().forEach(track => {
        track.stop();
      });
    };
  }, [cameraRef]);

  const startRecording = () => {
    recorder.current?.start();
  };

  const stopRecording = () => {
    recorder.current?.stop();
  };

  useEffect(() => {
    if (isRecording) startRecording();
    else stopRecording();
  }, [isRecording]);
};

export default useCameraRecorder;
