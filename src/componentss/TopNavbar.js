

//import Sidebarmenu from './Sidebarmenu';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import close icon
//import Sidebarmenu from './Sidebarmenu';
import './TopNavbar.css';
import logo from './Image/logo.jpg';

function TopNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* <div className='top col-sm-12 d-sm-visible d-lg-none '>
          {/* <TopNavbar/> */}
          /* <TemporaryDrawer/> */
          
          {/* <TemporaryDrawer/> }
       </div>
       <div className='col-2 col-md-3 col-sm-12 '>
         <Sidebarmenu/>
       </div> */} 
        {/* <div className=' main  col-9 bg-dark col-md-9'>  */}
       {/* <div className='main column col-10 col-md-9 col-sm-12 bg-dark visible-md d-lg-block px-0'> */}
         {/*  <Main/> */ }
         {/* <TemporaryDrawer/> */}
         {/* <Routes>
         <Route path='/' element={<Rootlayout/>}> 
          <Route path="/AllBookmarks" element={<AllBookmarks />} />
          <Route path="/DesignInspiration" element={<DesignInspiration/>}/>
          <Route path="/DesignNews" element={<DesignNews/>} />
          <Route path="/DesignSystem" element={<DesignSystem/>} />
     </Routes>
   
       </div> */}

      <header className="top-navbar d-lg-none visible-sm">
        <nav className="navbar bg-dark text-white d-flex justify-content-between align-items-center p-3">
          <img src={logo}  style={{width:'50px' }} alt="logo"/>
          <h2 className="logo mb-0 d-sm-block ">post</h2>
          <div className="icon">
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            {/* <Sidebarmenu isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}
          </div>
        </nav>
      </header>

    </div>
  );
}

export default TopNavbar;
function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
          <Route path='/' element={<Rootlayout/>}> 
           {/* <Route path="/AllBookmarks" element={<AllBookmarks />} /> */}
           <Route path="/DesignInspiration" element={<DesignInspiration/>}/>
           <Route path="/DesignNews" element={<DesignNews/>} />
           <Route path="/DesignSystem" element={<DesignSystem/>} />
      </Route>
    )
  )
  return (
   
        
    
    <div className="App">
     
     <RouterProvider router={router}/>
     
     
     
   </div>
  );
}
export default App;


<div className="App row d-flex bg-dark">
        <div className='top col-sm-12 d-sm-visible d-lg-none '>
          {/* <TopNavbar/> */}
          {/* <TemporaryDrawer/> */}
          
           <TemporaryDrawer/> 
        </div>
        <div className='col-2 col-md-3 col-sm-12 '>
          <Sidebarmenu/>
        </div>
         {/* <div className=' main  col-9 bg-dark col-md-9'>  */}
        <div className='main column col-10 col-md-9 col-sm-12 bg-dark visible-md d-lg-block px-0'>
          {/*  <Main/> */ }
          {/* <TemporaryDrawer/> */}
          <Routes>
            
           <Route path="/" element={<AllBookmarks />} />
           <Route path="/DesignInspiration" element={<DesignInspiration/>}/>
           <Route path="/DesignNews" element={<DesignNews/>} />
           <Route path="/DesignSystem" element={<DesignSystem/>} />
      </Routes>
    
        </div>
      </div>
      
    </BrowserRouter>
  );
}
export default App;
import { Outlet } from 'react-router-dom';
//import Footer from '../components/Footer';
import Sidebarmenu from '../componentss/Sidebarmenu';
import TemporaryDrawer from '../componentss/Navbar';
import AllBookmarks from '../componentss/AllBookmark';

function Rootlayout() {
  return (
    <div className="container-fluid">
      {/* Navbar */}
      <div className='top col-sm-12 d-sm-visible d-lg-none '>
        <TemporaryDrawer/>
      </div>

      {/* Main layout */}
      <div className="row">
        {/* Sidebar */}
        <div className=" col-3 col-lg-3 d-none d-lg-block p-0">
          <div className="bg-dark text-white vh-100 overflow-auto">
            <Sidebarmenu/>
          </div>
        </div>

        {/* Main content */}
        {/* <div className=" col-10 col-lg-9 col-md-12 p-0"> */}
        <div className='main column col-10 col-md-9 col-sm-12 bg-dark visible-md d-lg-block px-0'>
         {/*  <Main/> */ }
          <div className="bg-dark text-light vh-100">
            <AllBookmarks/>
            <Outlet />
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default Rootlayout;


