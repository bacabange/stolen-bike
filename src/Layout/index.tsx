import React from 'react';
import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="bg-white col-start-1 col-end-13">
        <Header />
      </div>
      {children}
    </div>
  );
};

export default Layout;
