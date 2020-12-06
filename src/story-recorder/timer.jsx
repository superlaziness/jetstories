import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Timer = ({ time = 10, isRunning, onOver }) => {
  useEffect(() => {
    let timeout;
    if (isRunning) {
      timeout = setTimeout(onOver, time * 1000);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isRunning]);

  return (
    <div className={cn('timer', isRunning && 'timer__running')}>
      <div
        className={cn('bar', isRunning && 'bar__running')}
        style={{ transitionDuration: `${time}s` }}
      />
    </div>
  );
};

Timer.propTypes = {
  time: PropTypes.number,
  isRunning: PropTypes.bool,
  onOver: PropTypes.func
};

export default Timer;
