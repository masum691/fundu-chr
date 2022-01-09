import React from 'react';
import AboutChurches from '../AboutChurches/AboutChurches';
import Banner from '../Banner/Banner';
import ConnectUs from '../ConnectUs/ConnectUs';
import ContactForm from '../ContactForm/ContactForm';
import Counter from '../Counter/Counter';
import GetInvoled from '../GetInvoled/GetInvoled';
import PraySection from '../PraySection/PraySection';
import Quotes from '../Quotes/Quotes';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutChurches></AboutChurches>
            <GetInvoled></GetInvoled>
            <PraySection></PraySection>
            <ContactForm></ContactForm>
            <Services></Services>
            <Counter></Counter>
            <Quotes></Quotes>
            <ConnectUs></ConnectUs>
            
        </div>
    );
};

export default Home;