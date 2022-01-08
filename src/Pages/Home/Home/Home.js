import React from 'react';
import AboutChurches from '../AboutChurches/AboutChurches';
import Banner from '../Banner/Banner';
import GetInvoled from '../GetInvoled/GetInvoled';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutChurches></AboutChurches>
            <GetInvoled></GetInvoled>
        </div>
    );
};

export default Home;