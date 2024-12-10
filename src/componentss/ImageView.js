import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Outlet } from "react-router"

const ImageDetails = () => {
  const { id } = useParams(); // Get ID from route params
  const [item, setItem] = useState(null); // State to store the fetched item
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchBookmark = async () => {
      try {
        const response = await axios.get(`http://localhost:4100/data/${id}`); // Fetch data
        setItem(response.data); // Set fetched data to state
      } catch (err) {
        console.error(err); // Log errors
        setError('Failed to load bookmark details. Please try again later.');
      }
    };

    fetchBookmark();
  }, [id]);

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>; // Display error message
  }

  if (!item) {
    return <div className="text-center mt-5">Loading...</div>; // Display loading indicator
  }

  return (
    <div className="containers bg-dark text-white">
      <div className="row align-items-center" style={{ height: '60vh' }}>
      <h3 className="bg-dark py-1 text-start text-white font-semibold">
        All links in one bookmark for <code>designers</code>
      </h3>
        {/* Left Side: Image */}
        <div className="col-md-4 ">
          <img
            src={item.image}
            alt={item.title}
            className="img-fluid rounded"
            style={{ objectFit: 'cover', maxHeight: '90vh', width: '90%'}}
          />
        </div>

        {/* Right Side: Title and Description */}
        <div className="col-md-8">
          <div className="pb-5">
            <h1 className="card-title fs-2">{item.title}</h1>
            <p className="card-text fs-4">{item.description}</p>
            <Link to="/" className="btn btn-primary mt-3">
              Back to All Bookmarks
            </Link>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;
