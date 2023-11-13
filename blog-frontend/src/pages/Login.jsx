import React from 'react'
import '../App.css'
import { useAuth } from './AuthContext';

const Login = () => {
    const { email, setEmail, password, setPassword, handleLogin } = useAuth();

    return (  
        <>
            <div className="container">
                <div className="signup-card">
                    <div className="signup-section">
                        <h1 className='signup-title'>Log In</h1>
                        <input type="text" id='email' name='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" id='password' name='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button className='signup-button' onClick={handleLogin}>Log In</button>
                        <a href="/signup" className='redirect-to-login'>Don't have an account? Sign up Here!</a>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Login;