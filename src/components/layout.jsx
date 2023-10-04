import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderForPaths = ['/', '/SignInForm'];

  if (hideHeaderForPaths.includes(location.pathname)) {
    return children;
  }

  return (
    <>
      <Header />
      <Sidebar/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;