import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Timer = ({ time = 10, isRunning }) => (
  <div className={cn('timer', isRunning && 'timer__running')}>
    <div
      className={cn('bar', isRunning && 'bar__running')}
      style={{ transitionDuration: `${time}s` }}
    />
  </div>
);

Timer.propTypes = {
  time: PropTypes.number,
  isRunning: PropTypes.bool
};

export default Timer;
