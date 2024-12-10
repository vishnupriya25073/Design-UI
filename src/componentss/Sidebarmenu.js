import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from './Image/logo.jpg';
import { RiTwitterXLine } from "react-icons/ri";

function Sidebarmenu() {
  return (
    <div className="sidebar bg-dark d-none d-md-block d-sm-none">
      <nav>
        {/* Top Section */}
        <div className="navbar bg-dark text-white p-3">
          <div className="d-flex justify-content-center align-items-center">
            {/* Logo */}
            <div className='ms-5'>
            <img
              src={logo}
              className="rounded-circle"
              style={{ width: '40px', height: '40px' }}
              alt="Logo"
            /></div>
            {/* Post with Twitter Icon */}
            <div className='ms-3 d-flex align-items-center'>
            <h2 className="mb-0 fs-6 text-white">
              <RiTwitterXLine /> Post
            </h2></div>
          </div>
        </div>

        {/* Sidebar Links */}
        <div className="ms-5">
          <ul className="nav nav-pills flex-column ms-4">
            <li className="nav-item py-1">
              <Link to="/" className="nav-link text-gold px-1 py-1">All Bookmarks</Link>
            </li>
            <li className="nav-item py-1">
              <Link to="/DesignInspiration" className="nav-link text-gold px-1 py-1">Design Inspiration</Link>
            </li>
            <li className="nav-item py-1">
              <Link to="/DesignNews" className="nav-link text-gold px-1 py-1">Design News</Link>
            </li>
            <li className="nav-item py-1">
              <Link to="/" className="nav-link text-gold px-1 py-1">Design System</Link>
            </li>
            <li className="nav-item py-2">
              <span className="fs-7">YouTube Channels</span>
            </li>
            <li className="nav-item py-2">
              <span className="fs-7">Design Podcast</span>
            </li>
            <li className="nav-item py-2">
              <span className="fs-7">Free UI Resources</span>
            </li>
            <li className="nav-item py-2">
              <span className="fs-7">Free Icons</span>
            </li>
            <li className="nav-item py-2">
              <span className="fs-7">Free Illustrations</span>
            </li>
            <li className="nav-item py-2">
              <span className="fs-7">Design Community</span>
            </li>
            <li className="nav-item py-2 text-nowrap  " >
              <span className="fs-7">Designer Lists</span>
            </li>
            <li className="nav-item py-2 text-wrap  " >
              <span className="fs-7">Logo Maker Tools</span>
            </li>
            <li className="nav-item py-2 text-wrap  " >
              <span className="fs-7">MockUp Tools</span>
            </li>
            <li className="nav-item py-2 text-wrap  " >
              <span className="fs-7">Image Optimization</span>
            </li>
            <li className="nav-item py-2 text-wrap  " >
              <span className="fs-7">Color Tools</span>
            </li>
            <li className="nav-item py-2 text-wrap  ">
              <span className="fs-7">Gradient Tools</span>
            </li>
            <li className="nav-item py-2 text-wrap  ">
              <span className="fs-7">Stock photos</span>
            </li>
            <li className="nav-item py-2 text-wrap  ">
              <span className="fs-7">Stock Videos</span>
            </li>
            <li className="nav-item py-2 text-nowrap  ">
              <span className="fs-7">Music & Sound</span>
            </li>
            <li className="nav-item py-2 text-nowrap  ">
              <span className="fs-7">Learn Design</span>
            </li>
            <li className="nav-item py-2 text-nowrap  ">
              <span className="fs-7">Accessibility</span>
            </li>
            <li className="nav-item py-2 text-nowrap  ">
              <span className="fs-7">Design Tools</span>
            </li>
            <li className="nav-item py-2 text-nowrap  ">
              <span className="fs-7">Prototyping tools</span>
            </li>
            <li className="nav-item py-2 text-nowrap  ">
              <span className="fs-7">Animation Tools</span>
            </li>
            <li className="nav-item py-2 text-nowrap  ">
              <span className="fs-7">Wireframing Tools</span>
            </li>
            <li className="nav-item py-2 text-nowrap  ">
              <span className="fs-7">Collaboration Tools</span>
            </li>
            <li className="nav-item py-2 text-nowrap  ">
              <span className="fs-7">Typography</span>
            </li>
            <li className="nav-item py-2 text-nowrap  ">
              <span className="fs-7">Backgrounds, patterns</span>
            </li>
            <li className="nav-item py-2 text-nowrap  ">
              <span className="fs-7">Design Books</span>
            </li>
            <li className="nav-item py-2 text-nowrap  ">
              <span className="fs-7">Bookmarks manager</span>
            </li>
            <li className="nav-item py-2 text-nowrap  ">
              <span className="fs-7">Market places</span>
            </li>
            </ul>
        </div>
      </nav>
    </div>
  );
}

export default Sidebarmenu;