import React from 'react';
import card1 from '../../../Images/card-img/cardimg1.png'
import card2 from '../../../Images/card-img/cardimg2.png'
import card3 from '../../../Images/card-img/cardimg3.png'
import './PraySection.css'
const PraySection = () => {
    return (
        <div className='pray-container'>
            <div className='width-container'>
                <div>
                    <div className='upcoming-events mb-5'>
                        <h5 className='text-center'>SERMONS</h5>
                        <h1 className='text-center'>Pray From Your <br /> Heart & Soul</h1>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <div class="col">
                        <div class="card h-100">
                            <img className='img-fluid' src={card1} class="card-img-top" alt="..." />
                            <div className='text-center icon-button'>
                                <button><div>
                                    <i class="fas fa-play me-4"></i>
                                    <i class="fab fa-cloudflare me-4"></i>
                                    <i class="fas fa-code me-4"></i>
                                    <i class="fas fa-file-pdf me-4"></i>
                                </div></button>
                            </div>
                            <div class="card-body i-card">
                                <h5 class="card-title">below as a natural lead-in to additional content.</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                <hr />
                                <h6>Period M. Dove</h6>
                                <i>March 17, 2017</i>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100">
                            <img className='img-fluid' src={card2} class="card-img-top" alt="..." />
                            <div className='text-center icon-button'>
                                <button><div>
                                    <i class="fas fa-play me-4"></i>
                                    <i class="fab fa-cloudflare me-4"></i>
                                    <i class="fas fa-code me-4"></i>
                                    <i class="fas fa-file-pdf me-4"></i>
                                </div></button>
                            </div>
                            <div class="card-body i-card">
                                <h5 class="card-title">Lorem ipsum dolor sit amet consectetur.</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                <hr />
                                <h6>Period M. Dove</h6>
                                <i>March 17, 2017</i>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img className='img-fluid' src={card3} class="card-img-top" alt="..." />
                            <div className='text-center icon-button'>
                                <button><div>
                                    <i class="fas fa-play me-4"></i>
                                    <i class="fab fa-cloudflare me-4"></i>
                                    <i class="fas fa-code me-4"></i>
                                    <i class="fas fa-file-pdf me-4"></i>
                                </div></button>
                            </div>
                            <div class="card-body i-card">
                                <h5 class="card-title">Lorem ipsum dolor sit amet consectetur.</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                <hr />
                                <h6>Period M. Dove</h6>
                                <i>March 17, 2017</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PraySection;