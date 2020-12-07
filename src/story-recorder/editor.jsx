import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@webteam/button';
import { UploadIcon, TrashIcon, VolumeIcon, MuteIcon } from '@webteam/icons';

import { useBreakpoint } from '@webteam/breakpoints';

import Trimmer from './trimmer';

import useEditor from './editor-hook';

const Editor = ({ onEdit, videoData, onClickCancel, onClickUpload }) => {
  const playerRef = useRef();
  const bp = useBreakpoint();
  const [muted, setMuted] = useState(true);
  const { trim } = useEditor({ onEdit, blob: videoData, playerRef });
  console.log('set', setMuted);
  const handleMute = () => {
    playerRef.current.muted = !playerRef.current.muted;
    setMuted(playerRef.current.muted);
  };
  return (
    <div>
      <div className={bp('player', { sm: 'player__sm' })}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video ref={playerRef} muted playsInline />
        <Button
          icon={muted ? <MuteIcon size="s" /> : <VolumeIcon size="s" />}
          size="s"
          mode="contrast"
          className="mute-button"
          onClick={handleMute}
        />
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
