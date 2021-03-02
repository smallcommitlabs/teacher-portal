import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Loading from './pages/util/Loading';
import { hydrateAuth } from './redux/authSlice/thunks/hydrateThunk';
import { RootState, useAppDispatch } from './redux/store';
import AuthRoutes from './routes/AuthRoutes';

const App = () => {
  const selectorFn = (store: RootState) => ({
    isHydrated: store.auth.isHydrated,
    isAuthenticated: store.auth.isAuthenticated,
  });

  const { isHydrated, isAuthenticated } = useSelector(selectorFn);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(hydrateAuth());
  }, [dispatch]);

  if (!isHydrated) {
    return <Loading />;
  }

  return <Router>{isAuthenticated ? <MainLayout /> : <AuthRoutes />}</Router>;
};

export default App;
