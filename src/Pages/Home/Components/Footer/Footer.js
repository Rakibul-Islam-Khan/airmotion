import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-dark text-light'>
            <div className="container pt-5 pb-4">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <span className='fw-bold'>Copyright © 2021 AirMotion.Com. All Rights Reserved.</span>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 d-flex justify-content-evenly  text-center">
                        <a href="#"><img src='https://i.ibb.co/jzwGqr3/icons8-american-express-48.png'/></a>
                        <a href="#"><img src='https://i.ibb.co/wgsc3vF/icons8-visa-48.png'/></a>
                        <a href="#"><img src='https://i.ibb.co/GM4Pq86/icons8-mastercard-48.png'/></a>
                        <a href="#"><img src='https://i.ibb.co/Mh6dw5D/icons8-paypal-48.png'/></a>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 text-center d-flex justify-content-evenly">
                        <a href="#"><i className="bi bi-facebook  fs-3"></i></a>
                        <a href="#"><i className="bi bi-twitter fs-3"></i></a>
                        <a href="#"><i className="bi bi-google fs-3"></i></a>
                        <a href="#"><i className="bi bi-pinterest fs-3"></i></a>
                        <a href="#"><i className="bi bi-instagram fs-3"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;



