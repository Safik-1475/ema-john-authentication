import React from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase-init';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('')
    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate('/orders')
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleLoginSubmit = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <div className="form">
                <h2 className='login-title'>Login</h2>
                <form onSubmit={handleLoginSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required />
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
                <button className='google-btn'>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;   