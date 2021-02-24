import React, { Suspense } from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route, Switch } from 'react-router-dom';

export interface routeMap {
  Fallback?: React.ComponentType;
  routes?: Array<route>;
  redirects?: Array<redirect>;
}

interface route {
  path: string;
  exact?: boolean;
  Component: React.ComponentType;
}

interface redirect {
  from: string;
  to: string;
}

export const renderRoutes = ({
  Fallback = () => (
    <Spinner animation='border' role='status'>
      <span className='sr-only'>Loading...</span>
    </Spinner>
  ),
  routes,
  redirects,
}: routeMap) => () => (
  <Suspense fallback={<Fallback />}>
    <Switch>
      {routes?.map(({ path, Component, exact }, i) => (
        <Route path={path} key={i} exact={exact}>
          <Component />
        </Route>
      ))}
      {redirects?.map(({ from, to }, i) => (
        <Redirect from={from} to={to} key={i} />
      ))}
    </Switch>
  </Suspense>
);