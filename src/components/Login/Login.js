import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <div className="form">
                <h2 className='login-title'>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required />
                    </div>
                    <input className='submit-login' type="submit" value="Login" />
                </form>
                <p className='sign-info'>New to Ema-John?
                    <Link className='sign-btn' to={'/signup'}> Create a Account</Link>
                </p>
                <div className="wrapper">
                    <div className="or-text"></div>
                    or
                    <div className="or-text"></div>
                </div>
                <button className='google-btn'>Contiune with Google</button>
            </div>
        </div>
    );
};

export default Login;   