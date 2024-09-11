import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    // const handleMouseOver = () => {
    //     setIsOpen(true);
    // };

    // const handleMouseOut = () => {
    //     setIsOpen(false);
    // };

    return (
        <div>
            <section className='navbar-header'>
                <div className='navbar-header-image'>
                    <img src='/images/dummy-logo-5b.png' alt='' />
                </div>
                <div className='navbar-header-profile'>
                    <i class="bi bi-person-fill"></i>
                    <h3>Srinath</h3>
                    <div
                        onClick={handleToggle}
                        // onMouseOver={handleMouseOver}
                        // onMouseOut={handleMouseOut}
                        className='navbar-header-profile-button'
                    >
                        <i class="bi bi-caret-down-fill"></i>
                    </div>
                    {isOpen && (
                        <div className='navbar-header-profile-dropmenu'>
                            <ul>
                                <li>
                                    <a href='/'>Profile</a>
                                </li>
                                <li>
                                    <a href='/'>Logout</a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Navbar
