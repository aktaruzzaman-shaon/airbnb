import React from 'react';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import Body from './Body/Body';
import Review from './Review/Review';
import Map from './Map/Map';
import About from './About/About';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Body></Body>
            <Review></Review>
            <Map></Map>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;