import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { CircleIcon } from '@webteam/icons';

import Button from '@webteam/button';

import useCameraRecorder from './camera-recorder-hook';
import Timer from './timer';

const squareIcon = (
  <svg
    viewBox="0 0 24 24"
    className="wt-icon wt-icon_theme_light wt-icon_size_m"
  >
    <rect x="6" y="6" width="12" height="12" fill="white" />
  </svg>
);

const CameraRecorder = ({
  onRecordComplete,
  isRecording,
  onClickRecordStart,
  onClickRecordStop,
  onError
}) => {
  const cameraRef = useRef();
  useCameraRecorder({
    cameraRef,
    isRecording,
    onRecordComplete,
    onError
  });
  return (
    <>
      <video ref={cameraRef} autoPlay muted />
      <Timer time={10} isRunning={isRecording} onOver={onClickRecordStop} />
      {!isRecording && (
        <Button
          mode="contrast"
          onClick={onClickRecordStart}
          icon={<CircleIcon className="record-icon" />}
        >
          Record
        </Button>
      )}
      {isRecording && (
        <Button
          className="button__record"
          onClick={onClickRecordStop}
          icon={squareIcon}
        >
          Record
        </Button>
      )}
    </>
  );
};

CameraRecorder.propTypes = {
  onRecordComplete: PropTypes.func.isRequired,
  onClickRecordStart: PropTypes.func.isRequired,
  onClickRecordStop: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  isRecording: PropTypes.bool
};

export default CameraRecorder;
