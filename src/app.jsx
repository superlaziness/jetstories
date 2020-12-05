import React from 'react';

import { ThemeProvider } from '@webteam/ui-contexts';
import { Layout, LayoutHeader, LayoutContent } from '@webteam/layout';

import Header from './header';
import Content from './content';

import '@webteam/colors/lib/index.css';

function App() {
  return (
    <ThemeProvider theme="dark">
      <Layout className="layout">
        <LayoutHeader>
          <Header />
        </LayoutHeader>
        <LayoutContent>
          <Content />
        </LayoutContent>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
