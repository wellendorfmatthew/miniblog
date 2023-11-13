import React, { useState, useContext } from 'react'
import '../App.css'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth'
import { useAuth } from './AuthContext';

const Signup = () => {
    const { email, setEmail, password, setPassword, handleSignup } = useAuth();

    return (  
        <>
            <div className="container">
                <div className="signup-card">
                    <div className="signup-section">
                        <h1 className='signup-title'>Sign Up</h1>
                        <input type="text" id='email' name='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" id='password' name='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button className='signup-button' onClick={handleSignup}>Sign Up</button>
                        <a href="/login" className='redirect-to-login'>Already have an account? Login Here!</a>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Signup;