import React from 'react';
import '../sass/card.scss';

const Card = ({type, price, storage, users, send}) => {

    return (
        <div className='card'>
            <h5>{type}</h5>
            <h1><span>$</span>{price}</h1>
            <ul className='features'>
                <li className='item'>{storage} Storage</li>
                <li className='item'>{users} Users Allowed</li>
                <li className='item'>Send up to {send}</li>
            </ul>
            <button>Learn More</button>
        </div>
    )
}

export default Card;