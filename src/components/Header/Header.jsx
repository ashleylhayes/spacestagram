import React from 'react';
import './Header.scss';
import Logo from '../../assets/icons/logo.png';

function Header() {
    return (
        <header className='header'>
            <img className='header__logo' src={Logo} alt='retro style font in purple that reads SPACESTAGRAM' />
        </header>
    );
}

export default Header;