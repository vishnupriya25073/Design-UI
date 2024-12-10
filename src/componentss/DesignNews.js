import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DesignInspiration.css';
function DesignNews() {
  const [getdata, setGetdata] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/post');
      setGetdata(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div className="text-center text-white mt-5">Loading...</div>;
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center">
        {error} <button onClick={fetchData} className="btn btn-link">Retry</button>
      </div>
    );
  }

  return (
    <div className="content-container 
    mt-3 bg-dark">
    {/* // style={{ */}
      {/* overflowY:'scroll',
      height:'100vh',
      overflowX:'hidden'
    }}> */}
      <h3 
  className="bg-dark py-2 text-start text-white font-semibold mb-2 sticky-top "  
  style={{ letterSpacing: 'normal', wordSpacing: 'normal' }}
>
       Design <code>News</code>
      </h3>
      

      <div className="row ">
        {getdata.map((item) => (
          <div key={item.id} className="col-md-4 col-lg-3 col-sm-6 mb-4 card bg-dark text-white">
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid rounded img-hover"
                style={{
                  cursor: 'pointer',
                  height: '190px',
                  width:'200px',
                  objectFit: 'cover',
                  borderRadius: '15px',
                }}
              />
            <div className="card-body ">
              <h4 className="card-title py-1 text-white fs-5 font-semibold">
                {item.title}
              </h4>
              <p className="card-text-white fs-6 fw-normal">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default DesignNews;