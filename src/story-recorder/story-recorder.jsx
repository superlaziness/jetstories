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
  const [ffmpegMessage, setFfmpegMessage] = useState('');
  const resultRef = useRef(null);
  const run = useProcessVideo({
    resultRef,
    onUpdate: v => setFfmpegMessage(old => `${old}'\n'${v}`)
  });
  const handleFile = e => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = readerEvent => {
      const arrayBuffer = readerEvent.target.result;
      const blob = new Blob([new Uint8Array(arrayBuffer)], {
        type: file.type
      });
      setRecordedData(blob);
      setState('recorded');
    };
    fileReader.readAsArrayBuffer(file);
  };
  console.log('state', state, trimData, recordedData);
  return (
    <div className={cn(className, 'recorder-container')}>
      <p style={{ color: 'white' }}>Status: {state}</p>
      <p style={{ color: 'white' }}>Message: {ffmpegMessage}</p>
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
        {state === 'recorded' && (
          <video ref={resultRef} autoPlay muted loop controls />
        )}
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
      <input type="file" id="hello" onChange={handleFile} />
    </div>
  );
};

export default Recorder;
