import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';

const App = () => (
  <Router>
    <PublicRoutes />
  </Router>
);

export default App;
