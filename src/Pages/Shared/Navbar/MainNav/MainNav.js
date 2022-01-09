import React from 'react';
import './MainNav.css'
import logo from '../../../../Images/hmlogo.png'

const MainNav = () => {
    return (
        <div className='width-container'>
            <nav class="navbar navbar-expand-lg navbar-light main-nav">
                <div class="container-fluid">
                    <img className='img-fluid me-2' src={logo} alt="" />
                    <a className="navbar-brand logo-name" href="#">Fundu</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Event</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Prayers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Causes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Sermons</a>
                            </li>
                        </ul>
                        <button className='donate-btn'>Donate Now</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default MainNav;