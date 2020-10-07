import React from 'react';
import '../sass/card.scss';

const Card = () => {

    return (
        <div className='card'>
            <h5>Professional</h5>
            <h1>Price Goes Here</h1>
            <ul className='features'>
                <li className='item'>Storage Here</li>
                <li className='item'>Users Allowed Here</li>
                <li className='item'>Sends up to x GB</li>
            </ul>
            <button>Learn More</button>
        </div>
    )
}

export default Card;