import React, { useState, useEffect } from 'react';
import '../App.css'
import { useAuth } from './AuthContext';

const Navigation = () => {
    const { user, handleSignout } = useAuth();

    return ( 
        <div className='nav-section'>
            <h1 className='blog-header'>Blog</h1>
            {user !== "" ? 
            (<p className='signin-name'>{user}<a href='/' className='login-link' style={{ marginLeft: "20px" }} onClick={handleSignout}>Signout</a></p>)
            : 
            <a href='/login' className='login-link'>Login</a> 
            }
        </div>
     );
}
 
export default Navigation;