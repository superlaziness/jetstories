import React, { useRef, useEffect } from 'react';
import cn from 'classnames';
import { colCn, rowCn } from '@webteam/layout';

import { useS3 } from '../aws-hook';

import { usePlayer } from './player-hook';
import Story from './story';

const StoryList = () => {
  const playerRef = useRef();
  const { getList, list } = useS3();
  console.log('list', list);
  useEffect(() => {
    getList();
  }, []);
  // const { play, activePlayer } =
  const { play, stop, activePlayer } = usePlayer(playerRef);
  return (
    <div className={rowCn()} ref={playerRef}>
      {list.map((video, index) => (
        <div
          key={video.key}
          className={cn(colCn({ default: 3, md: 4, sm: 12 }))}
        >
          <Story
            filePath={video.Key}
            onPlay={() => play(index)}
            onStop={() => stop(index)}
            isPlaying={activePlayer === index}
          />
        </div>
      ))}
      {list.length === 0 && (
        <>
          <div className={cn(colCn({ default: 3, md: 4, sm: 12 }))}>
            <div className="story">
              <div className="story-wrapper" />
            </div>
          </div>
          <div className={cn(colCn({ default: 3, md: 4, sm: 12 }))}>
            <div className="story">
              <div className="story-wrapper" />
            </div>
          </div>
          <div className={cn(colCn({ default: 3, md: 4, sm: 12 }))}>
            <div className="story">
              <div className="story-wrapper" />
            </div>
          </div>
          <div className={cn(colCn({ default: 3, md: 4, sm: 12 }))}>
            <div className="story">
              <div className="story-wrapper" />
            </div>
          </div>
          <div className={cn(colCn({ default: 3, md: 4, sm: 12 }))}>
            <div className="story">
              <div className="story-wrapper" />
            </div>
          </div>
          <div className={cn(colCn({ default: 3, md: 4, sm: 12 }))}>
            <div className="story">
              <div className="story-wrapper" />
            </div>
          </div>
          <div className={cn(colCn({ default: 3, md: 4, sm: 12 }))}>
            <div className="story">
              <div className="story-wrapper" />
            </div>
          </div>
          <div className={cn(colCn({ default: 3, md: 4, sm: 12 }))}>
            <div className="story">
              <div className="story-wrapper" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StoryList;
