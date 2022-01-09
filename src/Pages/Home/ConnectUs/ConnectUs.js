import React from 'react';
import card4 from '../../../Images/card-img/cardimg4.png'
import card5 from '../../../Images/card-img/cardimg5.png'
import card6 from '../../../Images/card-img/cardimg6.png'
import './ConnectUs.css';

const ConnectUs = () => {
    return (
        <div className='connect-container'>
            <div className='width-container'>
                <div>
                    <div className='upcoming-events mb-5'>
                        <h5 className='text-center'>NEWS</h5>
                        <h1 className='text-center'>Stay Connect With <br /> Our Feeds</h1>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <div class="col">
                        <div class="card h-100 border-0">
                            <img className='img-fluid' src={card4} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <small className='fw-bold'>14 TH MAY 2018</small>
                                <h5 class="card-title">below as a natural lead-in to additional content.</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                <i class="fas fa-angle-double-right arrow-ico"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100 border-0">
                            <img className='img-fluid' src={card5} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <small className='fw-bold'>14 TH MAY 2018</small>
                                <h5 class="card-title">Lorem ipsum dolor sit amet consectetur.</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                <i class="fas fa-angle-double-right arrow-ico"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 border-0">
                            <img className='img-fluid' src={card6} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <small className='fw-bold'>14 TH MAY 2018</small>
                                <h5 class="card-title">Lorem ipsum dolor sit amet consectetur.</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                <i class="fas fa-angle-double-right arrow-ico"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConnectUs;