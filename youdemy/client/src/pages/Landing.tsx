import React from 'react';
import '../styles/landing.css'

import { Link } from 'react-router-dom'
import { RiSearch2Line, RiBook3Line } from 'react-icons/ri';
import { MdPersonAddAlt } from 'react-icons/md';

function Landing() {
  return (
    <div className='main'>
      <div className='wrapper'>
        <div className='left'>
          <div className='items-wrapper'>
            <div className='item'>
              <span className='icon'><MdPersonAddAlt /></span>
              <span className="label">Follow your interests.</span>
            </div>
            <div className='item'>
              <span className='icon'><RiSearch2Line /></span>
              <span className='label'>Discover interesting topics.</span>
            </div>
            <div className='item'>
              <span className='icon'><RiBook3Line /></span>
              <span className='label'>Learn new things.</span>
            </div>
          </div>
        </div>

        <div className='center'>
          <img alt="logo" style={{ width: "50px" }} />
          <h1>Learn something<br />new today</h1>
          <span>Join YouDemy.</span>
          <Link to='/signup' className='btn-sign-up'>
            Sign up
          </Link>
          <Link to='/login' className='btn-login'>
            Log in
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Landing