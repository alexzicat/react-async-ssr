import React from 'react';
import {render} from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';

import Navigation from './components/Navigation';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
    </BrowserRouter>
  );
};

export default render(<App/>, document.getElementById('app'));
