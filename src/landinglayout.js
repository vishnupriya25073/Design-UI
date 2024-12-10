import React from 'react';
//import AllBookmarks from './componentss/AllBookmark';
import DesignInspiration from './componentss/Designinspiration';
import DesignNews from './componentss/DesignNews';
import DesignSystem from './componentss/DesignSystem';
import { Link } from 'react-router-dom';
import AllBookmarksss from './componentss/ImageList';

function Landinglayout() {

    return (
      <> <div class="">
           <div class="container">
            <Link to="/"><AllBookmarksss/></Link></div>
           <div className='container'><Link to="/DesignInspiration"><DesignInspiration/></Link></div>
           <div class="container"><Link to="/DesignNews"><DesignNews/></Link></div>
           <div class='container'><Link to="/DesignSystem"><DesignSystem/></Link></div>
           {/* <div><Outlet/></div> */}
        </div>
      </>
     
    )
  }
  
  export default Landinglayout

