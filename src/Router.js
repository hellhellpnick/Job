import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const routes = {
  main: '/Job',
  works: {
    main: 'works',
    work: 'work/:id',
  },
  notFound: '*',
};

const Home = lazy(() => import('./views/PageHome/ViewHome'));
const Works = lazy(() => import('./views/PageWorks/WorksView'));
const NotFound = lazy(() => import('./views/PageNotFound/ViewNotFound'));
const Layout = lazy(() => import('./components/MainNav/MainNav'));

const Router = () => (
  <Routes>
    <Route path={routes.main} element={<Layout />}>
      <Route index element={<Home title="Home page" />} />
      <Route path={routes.works.main} element={<Works title="Works" />} />
      <Route path={routes.notFound} element={<NotFound title="Not found" />} />
    </Route>
  </Routes>
);

export { routes, Router };
