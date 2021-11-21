import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./Products.css"
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://safe-harbor-94419.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))
    }, [])
    return (
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12">
                        <h2 className='text-center mb-5'>DRONE PRODUCTS</h2>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                products.map(product => <div key={product._id} className="col">
                                    <div className="card">
                                        <img src={product.img} height='300' className="card-img-top p-3" alt="..." />
                                        <div className="card-body">
                                            <h4 className="card-title d-flex justify-content-between">{product.name}<span className="card-title text-primary">${product.price}.00</span></h4>
                                            <p className="card-text products">{product.description}</p>
                                            <Link to={`/purchase/${product._id}`} ><button className="btn btn-primary">Purchase</button></Link>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                            <div className='text-center'><Link to="/explore" className="btn btn-dark my-5">Explore</Link></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;