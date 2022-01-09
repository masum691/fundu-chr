import React from 'react';
import './Quotes.css'
import quote from '../../../Images/quate.png'
import secondLogo from '../../../Images/secondlogo.png'
import circle from '../../../Images/circle.png'
import pman from '../../../Images/pman.png'

const Quotes = () => {
    return (
        <div className='quotes-container'>
            <div className="quotes text-center">
                <img className='img-fluid mt-5' src={secondLogo} alt="" />
                <p className='mt-4'>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi numquam, tempora quae veritatis qui consequatur temporibus ea, vitae adipisci ducimus odit omnis? consequatur temporibus ea, vitae adipisci ducimus odit omnis temporibus ea, vitae adipisci ducimus odit omnis"</p>
                <div>
                    <img className='circle mt-2' src={circle} alt="" />
                    <img className='pman' src={pman} alt="" />
                    <img className='circle mt-2' src={circle} alt="" />
                </div>
                <h5>Rosanil D. Pong</h5>
                <h6>FOUNDER, UIHUB</h6>
            </div>
        </div>
    );
};

export default Quotes;