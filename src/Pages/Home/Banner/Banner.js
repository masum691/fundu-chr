import React from 'react';
import MainNav from '../../Shared/Navbar/MainNav/MainNav';
import TopNav from '../../Shared/Navbar/TopNav/TopNav';
import './Banner.css'
import manImg from '../../../Images/man.png'

const Banner = () => {
    return (
        <div className='banner-container pt-3'>
            <TopNav></TopNav>
            <MainNav></MainNav>
            <div className='width-container'>
                <div className='row align-items-center pt-3'>
                    <div className='col-sm-12 col-lg-6'>
                        <h6>Our Missions From Jesus</h6>
                        <h1>United Churches People Prayers</h1>
                        <div>
                            <button>GET STARTED</button>
                            <button>CAUSES</button>
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