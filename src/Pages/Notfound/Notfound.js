import React from 'react';
import Footer from '../Home/Components/Footer/Footer';
import Header from '../Home/Components/Header/Header';

const Notfound = () => {
    return (
        <>
            <Header/>
            <div className="container">
                <div className="row">
                     <div className="col-md-12 text-center">
                        <img src="https://i.ibb.co/ct2cysC/undraw-page-not-found-su7k.png" alt="" height='362' />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Notfound;