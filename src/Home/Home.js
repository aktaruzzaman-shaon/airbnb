import React from 'react';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import Body from './Body/Body';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Body></Body>
        </div>
    );
};

export default Home;