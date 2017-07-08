import React from 'react';
import Link from 'react-router-dom/Link';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import universal from 'react-universal-component'

const PageA = universal(() => import(/* webpackChunkName: 'pageA' */ './PageA'), {
  resolve: () => require.resolveWeak('./PageA'),
  chunkName: 'pageA',
});

const PageB = universal(() => import(/* webpackChunkName: 'pageB' */ './PageB'), {
  resolve: () => require.resolveWeak('./PageB'),
  chunkName: 'pageB',
});

const PageC = universal(() => import(/* webpackChunkName: 'pageC' */ './PageC'), {
  resolve: () => require.resolveWeak('./PageC'),
  chunkName: 'pageC',
});

const Page404 = universal(() => import(/* webpackChunkName: 'page404' */ './Page404'), {
  resolve: () => require.resolveWeak('./Page404'),
  chunkName: 'page404',
});

const Navigation = () => {
  return (
    <main>
      <Link to='/pageA'>Page A</Link>
      <Link to='/pageB'>Page B</Link>
      <Link to='/pageC'>Page C</Link>
      <Link to='/'>Page 404</Link>

      <Switch>
        <Route path='/pageA' component={PageA} exact/>
        <Route path='/pageB' component={PageB} exact/>
        <Route path='/pageC' component={PageC} exact/>
        <Route component={Page404} exact/>
      </Switch>
    </main>
  );
};

export default Navigation;
