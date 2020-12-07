import React, { useState } from 'react';
import cn from 'classnames';

import { useBreakpoint } from '@webteam/breakpoints';

// import useProcessVideo from './process-hook';

import CameraRecorder from './camera-recorder';
import Editor from './editor';

// eslint-disable-next-line react/display-name

const Recorder = ({ className }) => {
  const bp = useBreakpoint();
  const [state, setState] = useState('idle');
  const [recordedData, setRecordedData] = useState(null);
  const [trimData, setTrimData] = useState({});
  // const [ffmpegMessage, setFfmpegMessage] = useState('');
  // const resultRef = useRef(null);
  // const run = useProcessVideo({
  //   resultRef,
  //   onUpdate: v => setFfmpegMessage(old => `${old}'\n'${v}`)
  // });
  // const handleFile = e => {
  //   const file = e.target.files[0];
  //   const fileReader = new FileReader();
  //   fileReader.onloadend = readerEvent => {
  //     const arrayBuffer = readerEvent.target.result;
  //     const blob = new Blob([new Uint8Array(arrayBuffer)], {
  //       type: file.type
  //     });
  //     setRecordedData(blob);
  //     setState('recorded');
  //   };
  //   fileReader.readAsArrayBuffer(file);
  // };
  console.log('state', state, trimData, recordedData);
  return (
    <div className={cn(className, 'recorder-container')}>
      <div className={bp('player', { sm: 'player__sm' })}>
        {state !== 'recorded' && (
          <CameraRecorder
            onRecordComplete={setRecordedData}
            isRecording={state === 'recording'}
            setState={setState}
            onClickRecordStart={() => setState('recording')}
            onClickRecordStop={() => setState('recorded')}
          />
        )}
        {state === 'recorded' && (
          <Editor
            videoData={recordedData}
            onEdit={setTrimData}
            onClickCancel={() => setState('idle')}
            onClickUpload={() => setState('uploading')}
          />
        )}
      </div>
    </div>
  );
};

export default Recorder;
