import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import Button from '@webteam/button';
import { UploadIcon, TrashIcon } from '@webteam/icons';

import Trimmer from './trimmer';

import useEditor from './editor-hook';

const Editor = ({ onEdit, videoData, onClickCancel, onClickUpload }) => {
  const playerRef = useRef();
  const { trim } = useEditor({ onEdit, blob: videoData, playerRef });
  return (
    <>
      <video ref={playerRef} muted />
      <Trimmer onChange={trim} />
      <Button mode="contrast" icon={<UploadIcon />} onClick={onClickUpload}>
        Upload
      </Button>{' '}
      <Button mode="outline" icon={<TrashIcon />} onClick={onClickCancel}>
        Cancel
      </Button>
    </>
  );
};

Editor.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onClickCancel: PropTypes.func.isRequired,
  onClickUpload: PropTypes.func.isRequired,
  videoData: PropTypes.object
};

export default Editor;
