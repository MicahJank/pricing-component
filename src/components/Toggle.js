import React from 'react';
import '../sass/toggle.scss';

const Toggle = () => {

    return (
        <section className='top-toggle'>
            <h3>Our Pricing</h3>
            <div className="toggle">
                <h5>Annually</h5>
                <button></button>
                <h5>Monthly</h5>
            </div>
        </section>
    )
}

export default Toggle;