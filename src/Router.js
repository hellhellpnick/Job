import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const routes = {
  main: '/',
  works: {
    main: '/works',
    work: '/works/:id',
  },
  notFound: '*',
};

const Home = lazy(() => import('./views/PageHome/ViewHome'));
const Works = lazy(() => import('./views/PageWorks/WorksView'));
const NotFound = lazy(() => import('./views/PageNotFound/ViewNotFound'));
const Layout = lazy(() => import('./components/MainNav/MainNav'));

const Router = ({ statusTheme, func }) => (
  <Routes>
    <Route path={routes.main} element={<Layout statusTheme={statusTheme} func={func} />}>
      <Route index element={<Home />} />
      <Route path={routes.works.main} element={<Works />} />
      <Route path={routes.notFound} element={<NotFound />} />
    </Route>
  </Routes>
);

export { routes, Router };
