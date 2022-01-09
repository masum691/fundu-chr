import React from 'react';
import icon1 from '../../../Images/icons/icon1.png'
import icon2 from '../../../Images/icons/icon2.png'
import icon3 from '../../../Images/icons/icon3.png'
import icon4 from '../../../Images/icons/icon4.png'
import icon5 from '../../../Images/icons/icon5.png'
import icon6 from '../../../Images/icons/icon6.png'
import './Services.css'

const Services = () => {
    return (
        <div className='service-container'>
            <div className='width-container'>
                <div className='text-center'>
                    <h6>
                        Features
                    </h6>
                    <h1>
                        Let's make the world <br /> better together
                    </h1>
                </div>
                <div className='row service-card mt-5'>
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='d-lg-flex'>
                            <div>
                                <img className='icon-img' src={icon1} alt="" />
                            </div>
                            <div className=''>
                                <h5>Free, simple setup.</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quas.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='d-lg-flex'>
                            <div>
                                <img className='icon-img' src={icon2} alt="" />
                            </div>
                            <div className=''>
                                <h5>Free, simple setup.</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quas.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='d-lg-flex'>
                            <div>
                                <img className='icon-img' src={icon3} alt="" />
                            </div>
                            <div className=''>
                                <h5>Free, simple setup.</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quas.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row service-card mt-5'>
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='d-lg-flex'>
                            <div>
                                <img className='icon-img' src={icon4} alt="" />
                            </div>
                            <div className=''>
                                <h5>Free, simple setup.</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quas.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='d-lg-flex'>
                            <div>
                                <img className='icon-img' src={icon5} alt="" />
                            </div>
                            <div className=''>
                                <h5>Free, simple setup.</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quas.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='d-lg-flex'>
                            <div>
                                <img className='icon-img' src={icon6} alt="" />
                            </div>
                            <div className=''>
                                <h5>Free, simple setup.</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quas.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;