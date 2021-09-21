import React from 'react';
import './Header.scss';
import Logo from '../../assets/icons/logo.png';

function Header() {
    return (
        <header className='header'>
            <a href='/'><img className='header__logo' src={Logo} alt='retro style font in purple that reads SPACESTAGRAM' /></a>
            <h1 className='header__blurb'>Brought to you by NASA's Mars Rover Photos API</h1>
        </header>
    );
}

export default Header;