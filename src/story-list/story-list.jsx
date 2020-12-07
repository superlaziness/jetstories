import React, { useRef, useEffect } from 'react';
import cn from 'classnames';
import { colCn, rowCn } from '@webteam/layout';
import { useBreakpoint } from '@webteam/breakpoints';

import { useS3 } from '../aws-hook';

import { usePlayer } from './player-hook';
import Story from './story';

const StoryList = () => {
  const playerRef = useRef();
  const bp = useBreakpoint();
  const { getList, list } = useS3();
  useEffect(() => {
    getList();
  }, []);
  const { play, stop, activePlayer } = usePlayer(playerRef);
  console.log(
    list.sort((a, b) => {
      console.log(new Date(a.LastModified));
      return new Date(b.LastModified) - new Date(a.LastModified);
    })
  );
  console.log('list', list);
  return (
    <div className={rowCn()} ref={playerRef}>
      {list.map((video, index) => (
        <div
          key={video.Key}
          className={cn(colCn({ default: 3, lg: 4, sm: 12 }))}
        >
          <Story
            filePath={video.Key}
            onPlay={() => play(index)}
            onStop={() => stop(index)}
            isPlaying={activePlayer === index}
          />
        </div>
      ))}
      {list.length === 0 &&
        new Array(bp(8, { lg: 6, sm: 3 })).fill(undefined).map((val, index) => (
          <div key={index} className={cn(colCn({ default: 3, lg: 4, sm: 12 }))}>
            <div className="story">
              <div className="story-wrapper" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default StoryList;
