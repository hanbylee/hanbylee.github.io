import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
    return(
        <div className='header'>
            <nav>
                <div className='logo'>
                    <h1>Hanbyeol</h1>
                </div>
                <ul className='ul-items'>
                    <li className='li-items'>
                        <Link to='/work'>Work</Link>
                        <Link to='/art'>Art</Link>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;