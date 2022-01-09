import React from 'react';
import './FreeBees.css'
import seclogo from '../../../Images/secondlogo.png'
import quote from '../../../Images/quate.png'
import pman from '../../../Images/pman.png'
import circle from '../../../Images/circle.png'

const FreeBees = () => {
    return (
        <div className='freebees-container'>
            <div className="free-bees text-center">
                {/* <div className='quote-logo ps-5'>
                    <img className='' src={quote} alt="" />
                </div>
                <div className='freebees-logo ms-sm-5'>
                    <img className='img-fluid' src={seclogo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloribus id illum ea sunt necessitatibus voluptatum amet nostrum eligendi placeat veritatis repellendus fugiat repudiandae, dignissimos reprehenderit, in dolor. dignissimos reprehenderit, in dolor.</p>
                    
                </div> */}
                <div className='char-two'>
                    <img className='quote-img' src={quote} alt="" />
                    <div className="second-chr-img">
                        <img className='img-fluid' src={seclogo} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloribus id illum ea sunt necessitatibus voluptatum amet nostrum eligendi placeat veritatis repellendus fugiat repudiandae.</p>
                        <div className='quote-next'>
                            <a href="#"><img className='circle-img mt-2'  src={circle} alt="" /></a>
                            <a href="#"><img className='p-man-img' src={pman} alt="" /></a>
                            <a href="#"><img className='circle-img mt-2' src={circle} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeBees;