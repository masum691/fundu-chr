import React from 'react';
import frame from '../../../Images/frame.png'
import carge from '../../../Images/carg.png'
import chimg from '../../../Images/ch12.png'
import './AboutChurches.css'

const AboutChurches = () => {
    return (
        <div className='width-container '>
            <div className='row about-churches'>
                <div className='col-sm-12 col-lg-6 text-center'>
                    <div className='char-two'>
                        <img className='img-fluid frame-img' src={frame} alt="" />
                        <img className='second-chr-img' src={carge} alt="" />
                    </div>
                </div>
                <div className='col-sm-12 col-lg-6 ps-lg-4'>
                    <img className='img-fluid mt-4' src={chimg} alt="" />
                    <h1>About Our AmericanChurches</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor expedita facere asperiores repudiandae dolore, sapiente hic eaque consequuntur explicabo non tempore! Facere tempore temporibus.
                        <br /><br /> Optio sunt fugit repellat quis error accusantium ea perspiciatis! Quod nemo expedita consectetur unde, eligendi perferendis commodi molestiae a, neque impedit hic enim asperiores dolore.
                    </p>
                    <a className='get-involed' href="#">Get Involed</a>
                    <a className='get-dir' href="#">Get Directions</a>
                </div>
            </div>
        </div>
    );
};

export default AboutChurches;