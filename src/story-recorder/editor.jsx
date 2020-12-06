import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import Trimmer from './trimmer';

import useEditor from './editor-hook';

const Editor = ({ onEdit, videoData }) => {
  const playerRef = useRef();
  const { trim } = useEditor({ onEdit, blob: videoData, playerRef });
  return (
    <>
      <video ref={playerRef} muted />
      <Trimmer onChange={trim} />
    </>
  );
};

Editor.propTypes = {
  onEdit: PropTypes.func.isRequired,
  videoData: PropTypes.object
};

export default Editor;
