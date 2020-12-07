import React, { useState } from 'react';

import { ThemeProvider } from '@webteam/ui-contexts';
import { Layout, LayoutHeader, LayoutContent } from '@webteam/layout';

import Header from './header';
import RecorderPage from './recorder-page';
import PlayerPage from './player-page';

import '@webteam/colors/lib/index.css';

function App() {
  const [state, setState] = useState('player');
  return (
    <ThemeProvider theme="dark">
      <Layout className="layout">
        <LayoutHeader>
          <Header
            isFull={state === 'player'}
            onButtonClick={() => setState('recorder')}
          />
        </LayoutHeader>
        <LayoutContent>
          {state === 'recorder' && <RecorderPage />}
          {state === 'player' && <PlayerPage />}
        </LayoutContent>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
