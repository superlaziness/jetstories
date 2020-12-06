import React, { useRef, useState } from 'react';
import cn from 'classnames';

import { useBreakpoint } from '@webteam/breakpoints';
import Button from '@webteam/button';

import Timer from './timer';

import useProcessVideo from './process-hook';

import CameraRecorder from './camera-recorder';
import Editor from './editor';

const Recorder = ({ className }) => {
  const bp = useBreakpoint();
  const [state, setState] = useState('idle');
  const [recordedData, setRecordedData] = useState(null);
  const [trimData, setTrimData] = useState({});
  const resultRef = useRef(null);
  const run = useProcessVideo({ resultRef });
  console.log('state', state, trimData, recordedData);
  return (
    <div className={cn(className, 'recorder-container')}>
      <div className={bp('player', { sm: 'player__sm' })}>
        {state !== 'recorded' && (
          <CameraRecorder
            onRecordComplete={setRecordedData}
            isRecording={state === 'recording'}
          />
        )}
        {state === 'recorded' && (
          <Editor videoData={recordedData} onEdit={setTrimData} />
        )}
        <video ref={resultRef} autoPlay muted loop />
      </div>
      <Timer
        time={10}
        isRunning={state === 'recording'}
        onOver={() => setState('recorded')}
      />
      <Button
        mode="contrast"
        onClick={() =>
          setState(state === 'recording' ? 'recorded' : 'recording')
        }
      >
        Record
      </Button>
      <Button mode="contrast" onClick={() => setState('idle')}>
        Clear
      </Button>
      <Button mode="contrast" onClick={() => run(recordedData, trimData)}>
        Process
      </Button>
      <p>{status}</p>
    </div>
  );
};

export default Recorder;
