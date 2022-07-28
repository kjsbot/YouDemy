import React, { useState } from 'react';
import '../styles/userforms.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [emailSignup, setEmailSignup] = useState<string>("");
    const [passSignup, setPassSignup] = useState<string>("");

    const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmailSignup(e.target.value);
    const handlePassInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassSignup(e.target.value);

    const submitSignupForm = () => {
        console.log(emailSignup);
        console.log(passSignup);
    };

    return (
        <div className="user-form-div">
            <form className='signup-form' autoComplete="off" onSubmit={submitSignupForm}>
                <h1>Signup</h1>
                <input 
                    className="email-input-box" 
                    type="email" 
                    placeholder="Email" 
                    required
                    onChange={handleEmailInputChange}
                    value={emailSignup}
                />
                <input 
                    className="pass-input-box" 
                    type="password" 
                    placeholder="Password" 
                    required
                    onChange={handlePassInputChange}
                    value={passSignup}
                />
                <div className="space" />
                <button className="signup-btn" type="submit">
                    Create Account
                </button>
                <div className="form-bottom-txt">
                    Have an account? 
                    <Link to="/login"><span className="small-accent">Log in!</span></Link>
                </div>
            </form>
        </div>
    );
};

export default Signup;