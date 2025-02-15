import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { useTextStyles } from '@webteam/typography';
import { AttachmentIcon, InstagramIcon } from '@webteam/icons';

import Spinner from 'react-spinner-material';

import Button from '@webteam/button';

import { useBreakpoint } from '@webteam/breakpoints';

import { useS3 } from '../aws-hook';

import { useProcessVideo } from './process-hook';

import CameraRecorder from './camera-recorder';
import Editor from './editor';

const Recorder = ({ className, onSuccess }) => {
  const textCn = useTextStyles();
  const [state, setState] = useState('idle');
  const [recordedData, setRecordedData] = useState(null);
  const [trimData, setTrimData] = useState({});

  const onProgress = message => console.log('processing', message);
  const onError = message => console.log('error', message);
  const handleProcessingFinish = data => {
    setRecordedData(data);
    setState('uploading');
  };

  const processVideo = useProcessVideo(
    onProgress,
    handleProcessingFinish,
    onError
  );

  const { upload } = useS3(() => setState('success'), onError);

  useEffect(() => {
    if (state === 'idle') {
      setRecordedData(null);
      setTrimData({});
    }
    if (state === 'processing') {
      processVideo(recordedData, trimData);
    }
    if (state === 'uploading') {
      upload(recordedData);
      console.log(upload);
    }
    if (state === 'success') {
      setTimeout(() => onSuccess(), 700);
    }
  }, [state]);

  const handleFile = e => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = readerEvent => {
      const arrayBuffer = readerEvent.target.result;
      const blob = new Blob([arrayBuffer], {
        type: file.type
      });
      setRecordedData(blob);
      setState('recorded');
    };
    fileReader.readAsArrayBuffer(file);
  };

  const createFileInput = () => {
    const input = document.createElement('input');
    input.hidden = 'hidden';
    input.type = 'file';
    input.capture = 'user';
    input.accept = 'video/*';
    document.getElementById('root').appendChild(input);
    input.addEventListener('change', handleFile);
    input.click();
  };

  const bp = useBreakpoint();
  return (
    <div
      className={cn(
        className,
        bp('recorder-container', { sm: 'recorder-container__sm' })
      )}
    >
      <div>
        {(state === 'idle' || state === 'recording') && (
          <CameraRecorder
            onRecordComplete={setRecordedData}
            isRecording={state === 'recording'}
            setState={setState}
            onClickRecordStart={() => setState('recording')}
            onClickRecordStop={() => setState('recorded')}
            onError={() => setState('notSupported')}
          />
        )}
        {state === 'recorded' && (
          <Editor
            videoData={recordedData}
            onEdit={setTrimData}
            onClickCancel={() => setState('idle')}
            onClickUpload={() => setState('processing')}
          />
        )}
        {(state === 'processing' || state === 'uploading') && (
          <div
            className={cn(bp('player', { sm: 'player__sm' }), {
              'success-animation': state === 'success'
            })}
          >
            <div className="loading-state-report">
              <Spinner radius={200} stroke={1} visible />
              <p className={cn('loading-state-message', textCn('wt-text-3'))}>
                {state}...
              </p>
            </div>
          </div>
        )}
        {state === 'notSupported' && (
          <div className={bp('player', { sm: 'player__sm' })}>
            <div className="not-supported desktop">
              {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
              <h2 className={textCn('wt-h1')}>😔</h2>
              <p className={textCn('wt-text-1')}>
                Your browser does not support camera recording, please choose
                file from the library
              </p>
              <Button
                mode="contrast"
                icon={<AttachmentIcon />}
                onClick={createFileInput}
              >
                Choose file
              </Button>
            </div>
            <div className="not-supported mobile">
              {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
              <h2 className={textCn('wt-h1')}>😲</h2>
              <p className={textCn('wt-text-1')}>
                Some motivation message here...
              </p>
              <Button
                mode="contrast"
                icon={<InstagramIcon />}
                onClick={createFileInput}
              >
                Open Camera
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Recorder.propTypes = {
  onSuccess: PropTypes.func.isRequired
};

export default Recorder;
