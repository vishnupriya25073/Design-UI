// import './final.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import TemporaryDrawer from '../componentss/Navbar';
import Sidebarmenu from '../componentss/Sidebarmenu';
//import Footer from '../componentss/footer';

function RootLayout() {
  return (
    <div className="App row d-flex bg-dark">
      {/* Drawer for Small Screens */}
      {/* <div className="top  bg-dark d-sm-visible d-md-none d-lg-none">
        <TemporaryDrawer />
      </div> */}

      {/* Sidebar for Large Screens */}
      <div className="col-md-3 bg-dark d-none d-md-block d-lg-block">
        <Sidebarmenu />
      </div>

      {/* Main Content */}
      <div className="main column col-sm-12 col-md-9 bg-dark overflow-y-scroll">
        <div className="top  bg-dark d-sm-block d-md-none d-lg-none">
        <TemporaryDrawer />
      </div>
      <Outlet />
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default RootLayout;
