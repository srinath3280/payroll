import React from 'react';
import './training.css';
import { Outlet } from 'react-router-dom';

const Training = () => {

    return (
        <div>
            <section className='training'>
                <h1>Training</h1>
                <div className='training-links'>
                    <div>
                        <a href='/training/ongoing'>Ongoing</a>
                    </div>
                    <div className='training-links-divide'></div>
                    <div>
                        <a href='/training/completed'>completed</a>
                    </div>
                </div>
                <div className='training-content'>
                    <Outlet></Outlet>
                </div>
            </section>
        </div>
    )
}

export default Training
