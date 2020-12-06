import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import useCameraRecorder from './camera-recorder-hook';

const CameraRecorder = ({ onRecordComplete, isRecording }) => {
  const cameraRef = useRef();
  useCameraRecorder({
    cameraRef,
    isRecording,
    onRecordComplete
  });
  return <video ref={cameraRef} autoPlay muted />;
};

CameraRecorder.propTypes = {
  onRecordComplete: PropTypes.func.isRequired,
  isRecording: PropTypes.bool
};

export default CameraRecorder;
