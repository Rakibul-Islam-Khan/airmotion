import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import axios from "axios";
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import Footer from '../Home/Components/Footer/Footer';
import Header from '../Home/Components/Header/Header';
import useAuth from '../../Hooks/useAuth';


const Purchase = () => {
    const { users } = useAuth();
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`https://safe-harbor-94419.herokuapp.com/products/${productId}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);
    const addProduct = () => {
        axios.post('https://safe-harbor-94419.herokuapp.com/orders', {
            name: product.name,
            price: product.price,
            img: product.img,
            description: product.description,
            rating: product.rating,
            userId: users.userId,
            status: 'Pending'
        }).then(res => {
            if (res.data) {
                swal("Product Added to Cart", "", "success");
            }
        })
    }
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-2"></div>
                    <div className="col-md-7">
                        <div class="card mb-3 p-4">
                            <img src={product.img} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h2 class="card-title">{product.name}</h2>
                                    <p><Rating key={product._id} name="half-rating-read" value={product?.rating} precision={0.5} readOnly /></p>
                                    <p class="card-text">{product.description}</p>
                                    <h3 class="card-text">Price: {product.price}</h3>
                                    <button onClick={() =>  addProduct(product._id)} className='btn btn-dark my-3'>Order Now</button>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Purchase;