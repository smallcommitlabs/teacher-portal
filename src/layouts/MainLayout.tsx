import React from 'react';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import PublicRoutes from '../routes/PublicRoutes';

const MainLayout: React.FC = () => (
  <div className={'d-flex vh-100'}>
    <Sidebar />
    <div className={'flex-grow-1 overflow-auto'}>
      <div className={'d-flex flex-column justify-content-between'} style={{ minHeight: '100%' }}>
        <PublicRoutes />
        <Footer />
      </div>
    </div>
  </div>
);

export default MainLayout;
