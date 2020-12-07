import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Spinner from 'react-spinner-material';

import Button from '@webteam/button';
import { PlayIcon } from '@webteam/icons';

import { s3Url } from '../config';

import './story.css';

const Story = ({ onPlay, onStop, isPlaying, filePath }) => {
  const videoRef = useRef();
  useEffect(() => {
    if (isPlaying && videoRef.current.paused) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.currentTime = 0;
      videoRef.current?.pause();
    }
  }, [isPlaying]);

  const handleClick = () => {
    if (isPlaying) return onStop();
    return onPlay();
  };

  const [videoIsReady, setVideoIsReady] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      console.log('check', videoRef.current.oncanplaythrough);
      videoRef.current.oncanplaythrough = () => {
        setVideoIsReady(true);
      };
      videoRef.current.onended = onStop;
    }
  }, [videoRef.current]);
  return (
    <div
      className={cn('story', {
        story__ready: videoIsReady,
        story__playing: isPlaying
      })}
    >
      {!videoIsReady && (
        <Spinner
          className="story-loader-spinner"
          radius={100}
          stroke={1}
          visible
        />
      )}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className="story-wrapper" onClick={handleClick}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          src={`${s3Url}${filePath}`}
          ref={videoRef}
          preload="metadata"
          muted
        />
        <Button
          className="story-play-button"
          mode="contrast"
          icon={<PlayIcon />}
        />
      </div>
    </div>
  );
};

Story.propTypes = {
  onPlay: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool,
  filePath: PropTypes.string.isRequired
};

export default Story;
