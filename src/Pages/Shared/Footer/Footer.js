import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="width-container">
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <h4>About Us</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias dicta esse, obcaecati natus, quos dolores voluptatum alias officiis cupiditate corrupti eos. Aspernatur ipsum id eos placeat nulla doloremque non et voluptatum. Iste, accusamus.</p>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-2'>
                        <h4>Company</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Team</li>
                            <li>Customers</li>
                            <li>Jobs</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-2'>
                        <h4>Services</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Team</li>
                            <li>Customers</li>
                            <li>Jobs</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <h4>Recent Sermons</h4>
                        <p>19 HOURS AGO</p>
                        <h6>Lorem ipsum dolor sit amet consectetur.</h6>
                        <p>19 HOURS AGO</p>
                        <h6>Lorem ipsum dolor sit amet consectetur.</h6>
                    </div>
                    <hr />
                    <div className='d-lg-flex align-items-center justify-content-between'>
                        <div>
                            <p>Made With Love - <span>FUNDU</span></p>
                        </div>
                        <div>
                            <p><i class="fas fa-angle-double-up"></i> BACK TO TOP <i class="fas fa-angle-double-up"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;