
import React from 'react';
import './SignIn.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button/Button';

const SignIn = () => {
    return (
        <div>

            <main className="main bg-dark">
                <section className="sign-in-content">
                    <FontAwesomeIcon className='icon' icon={faUserCircle} />
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <Button btnText={"Sign In"} className={"sign-in-button"} />
                    </form>
                </section>
            </main>
            <footer className="footer">
                <p className="footer-text">Copyright 2020 Argent Bank</p>
            </footer>
        </div>
    );
};

export default SignIn;
