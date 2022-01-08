import React from 'react';

const TopNav = () => {
    return (
        <div className='width-container'>
            <div className='mb-3'>
            <div className='d-md-flex d-lg-flex justify-content-between'>
                <div>
                    <i class="fab fa-facebook-f me-3"></i>
                    <i class="fab fa-twitter me-3"></i>
                    <i class="fab fa-behance me-3"></i>
                    <i class="fab fa-youtube me-3"></i>
                    <i class="fab fa-pinterest-p me-3"></i>
                </div>
                <div>
                <i class="fas fa-lock me-1"></i>
                <span>Signup</span>
                <span>/</span>
                <span>Login</span>
                </div>
            </div>
            </div>
        </div>
    );
};

export default TopNav;