import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { colCn, rowCn, Container } from '@webteam/layout';
import { useTextStyles } from '@webteam/typography';
import Button from '@webteam/button';
import { CloseIcon } from '@webteam/icons';

import './logos.css';

const Header = ({ isFull, onButtonClick }) => {
  const textCn = useTextStyles();
  return (
    <Container>
      <div className={rowCn({ alignItems: 'end' })}>
        <div className={colCn({ default: 'inline' })}>
          <a
            href="https://www.jetbrains.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="jetbrains-logo _logo-jetbrains-square _size-3" />
          </a>
        </div>
        {isFull && (
          <>
            <div className={colCn({ default: 'auto-fill' })}>
              <span className={textCn('wt-h2')}>JetStories</span>
            </div>
            <div
              className={cn(colCn({ default: 'inline' }), 'wt-offset-top-24')}
            >
              <Button onClick={onButtonClick} mode="contrast">
                Add your story!
              </Button>
            </div>
          </>
        )}
        {!isFull && (
          <>
            <div className={colCn({ default: 'auto-fill' })}> </div>
            <div className={colCn({ default: 'inline' })}>
              <Button
                onClick={onButtonClick}
                icon={<CloseIcon />}
                mode="contrast"
              />
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

Header.propTypes = {
  isFull: PropTypes.bool,
  onButtonClick: PropTypes.func.isRequired
};

export default Header;
