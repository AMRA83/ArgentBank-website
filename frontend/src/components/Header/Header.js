import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./argentBankLogo.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

function Header() {
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="main-nav-item" to="/sign-in">
                    <FontAwesomeIcon className='icon' icon={faUserCircle} /> Sign In
                </Link>
            </div>
        </nav>
    );
};

export default Header;
