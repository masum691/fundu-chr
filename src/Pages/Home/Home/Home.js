import React from 'react';
import AboutChurches from '../AboutChurches/AboutChurches';
import Banner from '../Banner/Banner';
import GetInvoled from '../GetInvoled/GetInvoled';
import PraySection from '../PraySection/PraySection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutChurches></AboutChurches>
            <GetInvoled></GetInvoled>
            <PraySection></PraySection>
        </div>
    );
};

export default Home;