import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Details() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        Getdata();
    }, []);

    const Getdata = async () => {
        try {
            const res = await axios.get("http://localhost:3700/data/"+id);
            setProduct(res.data);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = () => {
        alert("Page is Navigated");
    };

    return (
        product && (
            <div className="container mt-5 text-white">
                <div className="row g-4">
                    {/* Image Section */}
                    <div className="col-md-6">
                        <img 
                            src={product.image} 
                            alt={product.title} 
                            className="img-fluid rounded" 
                        />
                    </div>

                    {/* Details Section */}
                    <div className="col-md-6">
                        <h2 className="text-warning mb-3">{product.title}</h2>
                        <p>{product.description}</p>
                        <p>{product.details}</p>
                        <button
                            onClick={handleChange}
                            className="btn btn-outline-warning w-75"
                        >
                            Visit {product.title}
                        </button>
                    </div>
                </div>
            </div>
        )
    );
}

export default Details;
