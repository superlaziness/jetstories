import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import Button from '@webteam/button';
import { UploadIcon, TrashIcon } from '@webteam/icons';

import { useBreakpoint } from '@webteam/breakpoints';

import Trimmer from './trimmer';

import useEditor from './editor-hook';

const Editor = ({ onEdit, videoData, onClickCancel, onClickUpload }) => {
  const playerRef = useRef();
  const bp = useBreakpoint();
  const { trim } = useEditor({ onEdit, blob: videoData, playerRef });
  return (
    <div>
      <div className={bp('player', { sm: 'player__sm' })}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video ref={playerRef} />
      </div>
      <Trimmer onChange={trim} />
      <Button mode="contrast" icon={<UploadIcon />} onClick={onClickUpload}>
        Upload
      </Button>{' '}
      <Button mode="outline" icon={<TrashIcon />} onClick={onClickCancel}>
        Cancel
      </Button>
    </div>
  );
};

Editor.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onClickCancel: PropTypes.func.isRequired,
  onClickUpload: PropTypes.func.isRequired,
  videoData: PropTypes.object
};

export default Editor;
