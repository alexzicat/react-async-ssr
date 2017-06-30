import React from 'react';
import Link from 'react-router-dom/Link';
import Route from 'react-router-dom/Route';
import universal from 'react-universal-component'

const Navigation = () => {
  return (
    <main>
      <Link to='/pageA'>Page A</Link>
      <Link to='/pageB'>Page B</Link>
      <Link to='/pageC'>Page C</Link>

      <Route path='/pageA' component={universal(() => import(/* webpackChunkName: 'pageA' */ '../PageA'), {resolve: () => require.resolveWeak('../PageA')})} exact/>
      <Route path='/pageB' component={universal(() => import(/* webpackChunkName: 'pageB' */ '../PageB'), {resolve: () => require.resolveWeak('../PageB')})} exact/>
      <Route path='/pageC' component={universal(() => import(/* webpackChunkName: 'pageC' */ '../PageC'), {resolve: () => require.resolveWeak('../PageC')})} exact/>
    </main>
  );
};

export default Navigation;
