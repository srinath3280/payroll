import React from 'react';
import './home.css';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section className='home'>
                <div className='home-bar'>
                    <h1>MENU</h1>
                    <div className='home-bar-list'>
                        <div className='home-bar-list-items'>
                            <i class="bi bi-columns-gap"></i>
                            <a href='/dashboard'>Dashboard</a>
                        </div>
                        <div className='home-bar-list-items'>
                            <i class="bi bi-check2-square"></i>
                            <a href='/approvals'>Approvals</a>
                        </div>
                        <div className='home-bar-list-items'>
                            <i class="bi bi-diagram-3"></i>
                            <a href='/training'>Training</a>
                        </div>
                        <div className='home-bar-list-items'>
                            <i class="bi bi-fuel-pump"></i>
                            <a href='/fuel-expenses'>Fuel</a>
                        </div>
                    </div>
                </div>
                <div className='home-content'>
                    <Outlet></Outlet>
                </div>
            </section>
        </div>
    )
}

export default Home
