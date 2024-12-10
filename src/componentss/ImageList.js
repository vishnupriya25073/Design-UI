import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './DesignInspiration.css';
//import DesignInspiration from '../componentss/Designinspiration';
//import DesignNews from './DesignNews';
import Footer from './footer';

const AllBookmarksss = () => {
  const [data, setData] = useState([]); // State for fetched data
  const [error, setError] = useState(null); // State for error handling
  const [isLoading, setIsLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4100/data'); // Fetch data from API
      setData(response.data); // Update data state
      setError(null); // Clear any errors
    } catch (err) {
      console.error(err); // Log error
      setError('Failed to load bookmarks. Please try again later.');
    } finally {
      setIsLoading(false); // Stop loading indicator
    }
  };

  if (isLoading) {
    return <div className="text-center mt-5">Loading...</div>; // Loading state
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center">
        {error} <button onClick={fetchData} className="btn btn-link">Retry</button>
      </div>
    );
  }

  return (
    <div className="main-layout bg-dark text-decoration-none text-white">
      <header className="py-3 text-center">
        <h3 className="font-semibold">
          All links in one bookmark for <code>designers</code>
        </h3>
        <p className="text-end px-5">💌 submit@evernote.design</p>
      </header>

      <div className="content-container me-5">
        {/* Bookmarked items */}
        <div className="row mb-4">
          {data.map((item) => (
            <div key={item.id} className="col-md-4 col-lg-3 col-sm-6 mb-4 ">
              <Link to={`/image/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid rounded img-hover"
                  style={{
                    cursor: 'pointer',
                    height: '190px',
                    width: '200px',
                    objectFit: 'cover',
                    borderRadius: '15px',
                  }}
                  
                />
              </Link>
              <div className="card-body">
                <h4 className="card-title title-hover py-1 fs-5 font-semibold">{item.title}</h4>
                <p className="card-text fs-6">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="section">
          <DesignInspiration />
        </div> 
     <div className="section">
        <DesignNews />
        </div> */}
      <Footer />
      </div>
    </div>
  );
}; 

export default AllBookmarksss;
