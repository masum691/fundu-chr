import React from 'react';
import './Counter.css'
import logo7 from '../../../Images/icons/icon7.png'
import logo8 from '../../../Images/icons/icon8.png'
import logo9 from '../../../Images/icons/icon9.png'
import logo10 from '../../../Images/icons/icon10.png'

const Counter = () => {
    return (
        <div className='counter-container'>
            <div className='row counter-card'>
                <div className='col-sm-12 col-md-6 col-lg-3 text-center single-counter'>
                    <div className='py-5'>
                        <img src={logo7} alt="" />
                        <h1>10M<span>+</span></h1>
                        <h6>Donors</h6>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 text-center single-counter'>
                    <div className='py-5'>
                        <img src={logo8} alt="" />
                        <h1>6M<span>+</span></h1>
                        <h6>Volunteers</h6>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 text-center single-counter'>
                    <div className='py-5'>
                        <img src={logo9} alt="" />
                        <h1>1M<span>+</span></h1>
                        <h6>Get Rewards</h6>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 text-center'>
                    <div className='py-5'>
                        <img src={logo10} alt="" />
                        <h1>5M<span>+</span></h1>
                        <h6>Cup coffee</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;