import React from 'react';
import cn from 'classnames';

import { Container } from '@webteam/layout';
import { useTextStyles } from '@webteam/typography';
import { useBreakpoint } from '@webteam/breakpoints';

import StoryRecorder from './story-recorder';

const RecorderPage = () => {
  const textCn = useTextStyles();
  const bp = useBreakpoint();
  return (
    <Container>
      <div className="content">
        <h1 className={cn('column', textCn('wt-hero'), 'header')}>
          JetStories
        </h1>
        <StoryRecorder
          className={cn('column', bp('recorder__lg', { md: 'recorder' }))}
        />
        <p
          className={cn(
            'column',
            'text',
            textCn('wt-subtitle-2', { flow: true })
          )}
        >
          Hi!
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
    </Container>
  );
};

export default RecorderPage;
