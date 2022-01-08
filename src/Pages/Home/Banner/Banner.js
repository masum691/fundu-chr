import React from 'react';
import MainNav from '../../Shared/Navbar/MainNav/MainNav';
import TopNav from '../../Shared/Navbar/TopNav/TopNav';
import './Banner.css'
import manImg from '../../../Images/man.png'
import bgChImg from '../../../Images/church2.png'

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${bgChImg})`}}className='banner-container pt-3'>
            <TopNav></TopNav>
            <MainNav></MainNav>
            <div className='width-container'>
                <div className='row align-items-center pt-3'>
                    <div className='col-sm-12 col-lg-6'>
                        <h6><i class="fas fa-cross"></i> Our Missions From Jesus</h6>
                        <h1>United Churches People Prayers</h1>
                        <div>
                            <button className='get-started-btn me-2'>GET STARTED</button>
                            <button className='causes-btn'>CAUSES</button>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-6'>
                        <img className='man-img' src={manImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;