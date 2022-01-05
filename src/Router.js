import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const routes = {
  main: '/',
  works: {
    main: '/works',
    work: '/works/:id',
  },
  notFound: '*',
};

const Home = lazy(() => import('./views/PageHome/ViewHome'));
const NotFound = lazy(() => import('./views/PageNotFound/ViewNotFound'));

const Router = () => (
  <Switch>
    <Route exact path={routes.main}>
      <Home />
    </Route>
    <Route path={routes.notFound}>
      <NotFound />
    </Route>
  </Switch>
);

export { routes, Router };
