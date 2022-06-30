import React from 'react';
import '../styles/header.css';

import { Link } from 'react-router-dom';
import { AiFillSmile } from 'react-icons/ai';
import { FaBook } from 'react-icons/fa';

const Header = () => {
    return (
        <header className='header'>
            <h2 className='logo'>
                You<span className='accent'>Demy</span>
            </h2>

            <nav className='header-contents'>
                <ul>
                    <li>
                        <Link to="/home">
                            <div className='header-btn'>
                                <div className='nav-item'><FaBook size={27} color="D11A78" /></div>
                                <div className='nav-item'>Courses</div>
                            </div>
                        </Link>
                        
                    </li>
                    <li>
                        <Link to="/new">
                            <div className='header-btn'>
                                <div className='nav-item'><AiFillSmile size={27} color="D11A78" /></div>
                                <div className='nav-item'>Account</div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;