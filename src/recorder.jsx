import React, { useRef } from 'react';
import cn from 'classnames';

import { useBreakpoint } from '@webteam/breakpoints';
import Button from '@webteam/button';

import Timer from './timer';
import Trimmer from './trimmer';

import { useRecorder, usePreviewTrim, useProcessVideo } from './recorder-hooks';

const Recorder = ({ className }) => {
  const bp = useBreakpoint();
  const playerRef = useRef(null);
  const cameraRef = useRef(null);
  const resultRef = useRef(null);
  const { toggleRecording, clear, state, blob } = useRecorder({
    cameraRef
  });
  const { trim, trimmer } = usePreviewTrim({ playerRef, blob });
  const run = useProcessVideo({ resultRef });
  console.log('state', state, blob, trimmer);
  return (
    <div className={cn(className, 'recorder-container')}>
      <div className={bp('player', { sm: 'player__sm' })}>
        {state === 'recorded' && <video ref={playerRef} muted />}
        {state !== 'recorded' && (
          <video ref={cameraRef} autoPlay muted controls />
        )}
        <video ref={resultRef} autoPlay muted loop />
      </div>
      <Timer time={10} isRunning={state === 'recording'} />
      {state === 'recorded' && <Trimmer onChange={trim} />}
      <Button mode="contrast" onClick={toggleRecording}>
        Record
      </Button>
      <Button mode="contrast" onClick={clear}>
        Clear
      </Button>
      <Button mode="contrast" onClick={() => run(blob, trimmer)}>
        Process
      </Button>
      <p>{status}</p>
    </div>
  );
};

export default Recorder;
