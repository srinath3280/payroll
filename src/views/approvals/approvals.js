import React from 'react';
import './approvals.css';
import { Outlet } from 'react-router-dom';

const Approvals = () => {

  return (
    <div>
      <section className='approval'>
        <h1>Approvals</h1>
        <div className='approval-links'>
          <div>
            <a href='/approvals/approved'>Approved</a>
          </div>
          <div className='approval-links-divide'></div>
          <div>
            <a href='/approvals/pending'>Pending</a>
          </div>
          <div className='approval-links-divide'></div>
          <div>
            <a href='/approvals/rejected'>Rejected</a>
          </div>
        </div>
        <div className='approval-content'>
          <Outlet></Outlet>
        </div>
      </section>
    </div>
  )
}

export default Approvals
