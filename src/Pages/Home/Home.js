import React from 'react';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import Review from './Components/Review/Review';
import Store from './Components/Store/Store';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Products/>
            <Review/>
            <Store/>
            <Footer/>
        </div>
    );
};

export default Home;