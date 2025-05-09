import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const { pathname } = useLocation();

  const hideFooter =
  pathname.startsWith('/profile-settings') ||
  pathname === '/login' ||
  pathname === '/signup' ||
  pathname === '/contact' ||
  pathname.startsWith('/privacy-settings');

  

  return (
    <>
      <Navbar />
      <Outlet />
      {!hideFooter  && <Footer />}
    </>
  );
};

export default Layout;
