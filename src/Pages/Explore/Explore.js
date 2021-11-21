import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Home/Components/Footer/Footer';
import Header from '../Home/Components/Header/Header';
const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('https://safe-harbor-94419.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 my-5">
                        <h1 className=' text-center mb-5'>Explore</h1>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                products.map(product => <div key={product._id} className="col">
                                    <div className="card">
                                        <img src={product.img} height='300' className="card-img-top p-3" alt="..." />
                                        <div className="card-body">
                                            <h4 className="card-title d-flex justify-content-between">{product.name}<span className="card-title text-primary">${product.price}.00</span></h4>
                                            <p className="card-text products">{product.description}</p>
                                            <Link to={`/purchase/${product._id}`} className="btn btn-primary">Purchase</Link>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Explore;