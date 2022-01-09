import React from 'react';
import AboutChurches from '../AboutChurches/AboutChurches';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import GetInvoled from '../GetInvoled/GetInvoled';
import PraySection from '../PraySection/PraySection';
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
        </div>
    );
};

export default Home;