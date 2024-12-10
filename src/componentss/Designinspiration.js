import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DesignInspiration.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function DesignInspiration() {
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
    return <div className="text-start text-white mt-5">Loading...</div>;
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center">
        {error} <button onClick={fetchData} className="btn btn-link">Retry</button>
      </div>
    );
  }

  return (
    <div className="content-container h-100">
      {/* <h3 className="bg-dark text-center text-white fs-3 sticky-top">
       Design <code>Inspiration</code>
      </h3> */}
      <h3 
  className="bg-dark py-2 text-start text-white font-semibold mb-2 sticky-top container-fluid pb-3"  
  style={{ letterSpacing: 'normal', wordSpacing: 'normal' }}
>
  Design <code>Inspiration</code>
</h3>

      <div className="row">
        {getdata.map((item) => (
          <div key={item.id} className="col-md-4 col-lg-3 col-sm-6 mb-4 card bg-dark">
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
              <p className="card-text text-white fs-6 fw-normal">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default DesignInspiration;