import React, { useState } from 'react';
import ToggleButton from 'react-toggle-button';

import '../sass/toggle.scss';

const Toggle = () => {
    const [toggle, setToggle] = useState(false);


    const handleToggle = (e) => {
        e.preventDefault();
        setToggle(!toggle);
    }

    return (
        <section className='top-toggle'>
            <h3>Our Pricing</h3>
            <div className="toggle">
                <h5>Annually</h5>
                <button className="toggle-btn" value={toggle} onClick={handleToggle}><div className={`circle ${toggle ? '' : 'active'}`}></div></button>
                <h5>Monthly</h5>
            </div>
        </section>
    )
}

export default Toggle;