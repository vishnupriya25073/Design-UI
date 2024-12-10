import React from 'react'
import AllBookmarks from '../componentss/AllBookmark'
import TemporaryDrawer from '../componentss/Navbar';
import Sidebarmenu from '../componentss/Sidebarmenu';
import DesignInspiration from './Designinspiration';

export function Top() {
  return (
    <div>
      <div className="App row d-flex bg-dark">
        <div className='top col-sm-12 d-sm-visible d-lg-none '>
          {/* <TopNavbar/> */}
          {/* <TemporaryDrawer/>  */}
          <TemporaryDrawer/>
          
           {/* <TemporaryDrawer/>  */}
        </div>
        <div className='col-2 col-md-3 bg-dark col-sm-12 '>
          {/* <Sidebarmenu/> */}
          <Sidebarmenu/>
        </div>
         {/* <div className=' main  col-9 bg-dark col-md-9'>  */}
        <div className='main column col-10 col-md-9 col-sm-12 bg-dark visible-md d-lg-block px-0'>
          <AllBookmarks/>
          <DesignInspiration/>
        </div>
        </div>
        </div>
  );
}