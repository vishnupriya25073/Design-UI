import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import ImageList from '../Product/ImageList';
import ImageDetails from '../Product/ImageView';
import AllBookmarksss from '../Product/ImageList';
//import View from './componentss/Product/View';

function View() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AllBookmarksss/>} />
          <Route path="/image/:id" element={<ImageDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default View;
<iframe
                  id="twitter-widget-0"
                  allowTransparency="true"
                  allowFullScreen={true}
                  title="X Post Button"
                  src="https://platform.twitter.com/widgets/tweet_button.2f70fb173b9000da126c79afe2098f02.en.html#dnt=false&amp;id=twitter-widget-0&amp;lang=en&amp;original_referer=https%3A%2F%2Fwww.evernote.design%2F&amp;size=m&amp;text=Evernote.Design%20-%20All%20in%20One%20Bookmark%20Links%20for%20Designer&amp;time=1727066999908&amp;type=share&amp;url=https%3A%2F%2Fwww.evernote.design%2F"
                  style={{
                    visibility: 'visible',
                    width: '65px',
                    height: '20px',
                  }} */}
                ></iframe> 

