import React from 'react';
import {injectGlobal} from 'styled-components';

import Header from './Header';
import Navigation from './Navigation';

const App = () => {
  return (
    <main>
      <Header/>
      <Navigation/>
    </main>
  );
};

injectGlobal`
  body {
    margin: 0;
  }
`;

export default App;
