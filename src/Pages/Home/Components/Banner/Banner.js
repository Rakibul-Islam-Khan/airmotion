import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css"
const Banner = () => {
    return (
        <div className='banner'>
            <div className="container">
                <div className="row text-light">
                    <div className="col-md-6 mt-5">
                        <p className='fs-3 mt-5'> The World’s Smallest Quadcopter</p>
                        <h1 className='display-1'>BuzzBee <br /> Nano Drone</h1>
                        <p>Newest Hover Function, Elomus F18 Drone 3 Auto Quadcopter UFO With 2Mp Wifi Camera</p>
                        <Link to="/explore">
                        <button className='btn btn-primary'>Shop Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;