import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  const { pathname } = useLocation();
  


  const hiddFooter = pathname === '/profile-settings';

  return (
    <>
      <Navbar />
      <Outlet />
      {!hiddFooter && <Footer />}
    </>
  );
};

export default Layout;
