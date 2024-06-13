import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./argentBankLogo.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { LuLogOut } from 'react-icons/lu';
import './Header.scss';

import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../Redux/loginSlice';
function Header() {
    const dispatch = useDispatch();
    const loginStore = useSelector((state) => state.login);
    const token = useSelector((state) => state.login.userToken);

    const handleRedirectHome = () => {
        localStorage.removeItem('token');
        console.log('Token supprimé du local storage');
        dispatch(logoutUser());
    };

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
            <div className="login">
                {/* Affichage conditionnel du lien "Sign In" ou "Sign Out" */}
                {loginStore && loginStore.userProfil && loginStore.userProfil.userName && (
                    <Link className="main-nav-item" to="/user">
                        <FontAwesomeIcon className='icon' icon={faUserCircle} />
                        <p>{loginStore.userProfil.userName}</p>
                    </Link>
                )}
                {token ? (
                    <Link className="main-nav-item" to="/" onClick={handleRedirectHome}>
                        <LuLogOut />
                        Sign Out
                    </Link>
                ) : (
                    <Link className="main-nav-item" to="/sign-in">
                        <FontAwesomeIcon className='icon' icon={faUserCircle} />
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
}


export default Header;
