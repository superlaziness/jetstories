import React from 'react';

import { colCn, rowCn, Container } from '@webteam/layout';

import './logos.css';

const Header = () => (
  <Container className={rowCn}>
    <div className={colCn}>
      <a
        href="https://www.jetbrains.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="jetbrains-logo _logo-jetbrains-square _size-3" />
      </a>
    </div>
  </Container>
);

export default Header;
