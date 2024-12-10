import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Details() {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("http://localhost:3700/data/"+id);
        setProduct(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    product && (
      <div className="container mt-5 text-white">
        <div className="row g-4">
          <div className=" col-5 col-md-6">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded"
            />
          </div>
          <div className=" col-7 col-md-6">
            <h2 className="text-warning mb-3">{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.details}</p>
          </div>
        </div>
      </div>
    )
  );
}

export default Details;
