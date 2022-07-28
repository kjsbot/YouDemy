import React, { useState } from 'react';
import '../styles/userforms.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [emailLogin, setEmailLogin] = useState<string>("");
    const [passLogin, setPassLogin] = useState<string>("");

    const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmailLogin(e.target.value);
    const handlePassInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassLogin(e.target.value);

    const submitSignupForm = () => {
        console.log(emailLogin);
        console.log(passLogin);
    };

    return (
        <div className="user-form-div">
            <form className='signup-form' autoComplete="off" onSubmit={submitSignupForm}>
                <h1>Login</h1>
                <input 
                    className="email-input-box" 
                    type="email" 
                    placeholder="Email" 
                    required
                    onChange={handleEmailInputChange}
                    value={emailLogin}
                />
                <input 
                    className="pass-input-box" 
                    type="password" 
                    placeholder="Password" 
                    required
                    onChange={handlePassInputChange}
                    value={passLogin}
                />
                <a href="#" className="reset-pass-link">Forgot your password?</a>
                <button className="signup-btn" type="submit">
                    Sign In
                </button>
                <div className="form-bottom-txt">
                    No account? 
                    <Link to="/signup"><span className="small-accent">Sign up!</span></Link>
                </div>
            </form>
        </div>
    );
};

export default Login;