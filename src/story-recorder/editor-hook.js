import { useEffect, useRef, useState } from 'react';

const useEditor = ({ playerRef, onEdit, blob }) => {
  const trimmer = useRef([]);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const looper = e => {
    const playingDuration =
      (e.target.duration * trimmer.current[1]) / 100 || e.target.duration;
    const resetTime = (trimmer.current[0] * e.target.duration) / 100 || 0;
    if (e.target.currentTime >= playingDuration) {
      e.target.currentTime = resetTime;
      e.target.play();
    }
  };

  const runPlayer = async () => {
    const data = URL.createObjectURL(blob);
    playerRef.current.style.opacity = 0;
    playerRef.current.src = data;
    while (
      playerRef.current.duration === Infinity ||
      isNaN(playerRef.current.duration)
    ) {
      await new Promise(r => setTimeout(r, 200));
      playerRef.current.currentTime = 10000000 * Math.random();
    }
    setDuration(playerRef.current.duration);
    playerRef.current.currentTime = 0;
    playerRef.current.style.opacity = 1;
    playerRef.current.play();
  };

  useEffect(() => {
    if (blob && playerRef.current) {
      runPlayer();
      playerRef.current.addEventListener('timeupdate', looper);
    }
    return () => {
      playerRef.current?.removeEventListener('timeupdate', looper);
    };
  }, [blob]);

  const trimStart = () => {
    if (playerRef.current.duration === Infinity) return;
    playerRef.current.currentTime =
      (trimmer.current[0] * playerRef.current.duration) / 100;
    playerRef.current.play();
    setStartTime(playerRef.current.currentTime);
  };

  const trimEnd = () => {
    if (playerRef.current.duration === Infinity) return;
    const endTrimTime = (trimmer.current[1] * playerRef.current.duration) / 100;
    playerRef.current.currentTime = endTrimTime - 0.2;
    playerRef.current.play();
    setEndTime(endTrimTime);
  };

  const trim = value => {
    const isStartTrimmed =
      value[0] !== trimmer.current[0] && value[1] === trimmer.current[1];
    const isEndTrimmed =
      value[1] !== trimmer.current[1] && value[0] === trimmer.current[0];
    trimmer.current = value;
    if (isStartTrimmed) trimStart();
    if (isEndTrimmed) trimEnd();
  };

  useEffect(() => {
    onEdit({
      startTime,
      endTime,
      duration
    });
  }, [startTime, endTime, duration]);

  return { trim };
};

export default useEditor;
