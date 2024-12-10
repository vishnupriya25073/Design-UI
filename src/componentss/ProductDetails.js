import React from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
export default function ProductDetails() {
  const item = useLoaderData();

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container text-white">
      <div className="card bg-dark p-3">
        <img
          src={item.image}
          alt={item.title}
          className="img-fluid mb-3"
          style={{ borderRadius: '10px' }}
        />
        <h2 className="text-white">{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
}


// Loader function to fetch career details by ID
export const ProductDetailsLoader = async ({ params }) => {
  try {
    const { id } = params;
    const res = await axios.get("http://localhost:3900/data/"+id);
    return res.data; // Ensure proper JSON response
  } catch (error) {
    throw new Error('Failed to fetch the product details.');
  }
};
