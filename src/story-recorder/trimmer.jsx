import React from 'react';
import PropTypes from 'prop-types';
import { Slider, Handles, Tracks } from 'react-compound-slider';

import { LeftIcon, RightIcon } from '@webteam/icons';

import './trimmer.css';

const Trimmer = ({ onChange }) => (
  <Slider
    domain={[0, 100]}
    values={[0, 100]}
    mode={2}
    className="wrapper"
    onUpdate={onChange}
  >
    <div className="track" />
    <Handles>
      {({ handles, getHandleProps }) => (
        <div>
          {handles.map((handle, i) => (
            <div
              className="handle"
              key={handle.id}
              style={{
                left: `${handle.percent}%`,
                marginLeft: i === 0 ? '-30px' : 0
              }}
              {...getHandleProps(handle.id)}
            >
              {i === 0 ? (
                <LeftIcon className="handle-icon handle-icon__left" />
              ) : (
                <RightIcon className="handle-icon handle-icon__right" />
              )}
            </div>
          ))}
        </div>
      )}
    </Handles>
    <Tracks left={false} right={false}>
      {({ tracks, getTrackProps }) => (
        <div>
          {tracks.map(({ id, source, target }) => (
            <div
              style={{
                left: `${source.percent}%`,
                width: `${target.percent - source.percent}%`
              }}
              {...getTrackProps(id)}
              key={id}
              className="track"
            />
          ))}
        </div>
      )}
    </Tracks>
  </Slider>
);

Trimmer.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Trimmer;
