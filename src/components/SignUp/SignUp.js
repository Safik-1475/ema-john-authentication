import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase-init';


const SignUp = () => {
    // declare useState 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [form, setForm] = useState();
    const [formError, setError] = useState('')
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate('/shop')
    }
    // email handler 
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    // password handle
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    // handle confirm password
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }
    // handle form submit
    const handleOnSubmitBlur = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Your password didn't match")
            return
        }
        else if (password.length < 6) {
            setError("Password must be 6 characters")
            return
        }
        createUserWithEmailAndPassword(email, password)

    }

    return (
        <div>
            <div className='form-container'>
                <div className="form">
                    <h2 className='login-title'>Login</h2>
                    <form onSubmit={handleOnSubmitBlur}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="email" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirmPassword" id="confirmPassword" required />
                        </div>
                        <p style={{ color: 'red', margin: '10px 5px' }}>{formError}</p>
                        <input className='submit-login' type="submit" value="Login" />
                    </form>
                    <p className='sign-info'>Already have an Account?
                        <Link className='sign-btn' to={'/login'}> Login</Link>
                    </p>
                    <div className="wrapper">
                        <div className="or-text"></div>
                        or
                        <div className="or-text"></div>
                    </div>
                    <button className='google-btn'>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;