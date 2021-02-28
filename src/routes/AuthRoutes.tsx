import { lazy } from 'react';
import { renderRoutes, routeMap } from './routeMap';

const LazyAuth = lazy(() => import('../pages/auth/Auth'));

const authRouteMap: routeMap = {
  routes: [
    {
      path: '/login',
      Component: LazyAuth,
      exact: true,
    },
  ],
  redirects: [
    {
      from: '/*',
      to: '/login',
    },
  ],
};

export default renderRoutes(authRouteMap);
