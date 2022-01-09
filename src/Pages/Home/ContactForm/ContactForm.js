import React from 'react';
import './ContactForm.css'

const ContactForm = () => {
    return (
        <div className='contact-form'>
            <div className='img-op'>
            </div>
            <div className='width-container'>
                <div className="text-center">
                    <h6 className='join-with-us'>JOIN WITH US</h6>
                    <h1 className='mb-5'>Get Involve With Us <br /> & Made A Beautiful Globe</h1>
                </div>
                <div className='form-container'>
                    <form>
                        <div className='row'>
                            <div className='col-sm-12 col-lg-6'>
                                <label htmlFor="name">Your first name <span>**</span></label>
                                <br />
                                <input className='input-grp' type="text" placeholder='Enter Your first name....' />
                                <br />
                                <label htmlFor="email">Your email <span>**</span></label>
                                <br />
                                <input className='input-grp' type="email" placeholder='Enter Your email....' /><br />
                                <label className='mt-3 mb-2' htmlFor="relegion">Relegion <span>**</span></label>
                                <br />
                                <select className='sel-relegion'>
                                    <option value="select">Select Relegion</option>
                                    <option value="Islam">Islam</option>
                                    <option value="hindu">Hindu</option>
                                    <option value="chr">Christain</option>
                                </select>
                            </div>
                            <div className='col-sm-12 col-lg-6 '>
                                <label htmlFor="name">Your last name <span>**</span></label>
                                <br />
                                <input className='input-grp' type="text" placeholder='Enter your last name' />
                                <br />
                                <label htmlFor="number">Your Phone number <span>**</span></label>
                                <br />
                                <div>
                                    <input className='input-grp' type="text" />
                                    <select className='num-select' name="num">
                                        <option value="select">+(880)</option>
                                        <option value="num1">+028</option>
                                        <option value="num2">+91</option>
                                        <option value="num3">+46</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="location">Select location <span>**</span>
                                    </label>
                                    <br />
                                    <div className='two-select-input'>
                                        <div className='country-select'>
                                            <input type="text" />
                                            <select className='coun-select' name="cuntry">
                                                <option value="country">Country</option>
                                                <option value="us">United State</option>
                                                <option value="India">India</option>
                                                <option value="uk">United Kingdom</option>
                                            </select>
                                        </div>
                                        <div className='state-select'>
                                            <input type="text" />
                                            <select className='stat-select' name="state-sel">
                                                <option value="state">State</option>
                                                <option value="ny">New York</option>
                                                <option value="nd">New Delhi</option>
                                                <option value="london">London</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-center'>
                            <button>Join right now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;