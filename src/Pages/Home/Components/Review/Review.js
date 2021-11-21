import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import Rating from '@mui/material/Rating';
import "./Review.css"
const Review = () => {
    const [reviews, setReviews] = useState([]);
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slickNext: false,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    useEffect(() => {
        fetch('https://safe-harbor-94419.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12 mb-5">
                        <h1 className='text-center mb-5'>WHAT OUR CLIENTS SAY</h1>
                        <Slider {...settings}>
                            {
                                reviews.map(review => <div key={review._id} className='my-3'>
                                    <div className='review-item border p-3'>
                                        <img src={review.img} className='mx-auto air-img' alt="" />
                                        <div className="card-body text-center">
                                            <h5 className='text-center'>{review.title}</h5>
                                            <p className="card-text air-card">{review.description}</p>
                                            <i className="bi bi-quote"></i>
                                            <h5 className="card-title">{review.name}</h5>
                                            <p className='text-center'><Rating name="read-only" value={review.rating?.toString()} precision={0.5} readOnly /></p>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;