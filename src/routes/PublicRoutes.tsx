import { lazy } from 'react';
import { renderRoutes, routeMap } from './routeMap';

const LazyIndex = lazy(() => import('../pages/Index'));

const LazyInfo = lazy(() => import('../pages/Info'));

const publicRouteMap: routeMap = {
  routes: [
    {
      path: '/',
      Component: LazyIndex,
      exact: true,
    },
    {
      path: '/info',
      Component: LazyInfo,
      exact: true,
    },
  ],
  redirects: [
    {
      from: '/*',
      to: '/',
    },
  ],
};

export default renderRoutes(publicRouteMap);
