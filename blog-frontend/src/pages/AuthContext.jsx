import React, { useState, useEffect, useContext, createContext } from 'react';
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) =>  {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const auth = getAuth();
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const credentials = await createUserWithEmailAndPassword(auth, email, password);
            console.log(credentials.user);
            setUser(email);
            setEmail("");
            setPassword("");
            navigate("/")
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleSignout = async () => {
        try {
            const signout = await signOut(auth);   
            console.log("User signed out");
            setUser("");
            setEmail("");
            setPassword("");
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleLogin = async () => {
        try {
            const signin = await signInWithEmailAndPassword(auth, email, password);
            console.log(signin.user);
            setUser(email);
            setEmail("");
            setPassword("");
            navigate("/")
        } catch (error) {
            console.log(error.message);
        }
    }

    return ( 
        <AuthContext.Provider value={{user, setUser, email, setEmail, password, setPassword, handleSignup, handleSignout, handleLogin}}>
            {children}
        </AuthContext.Provider>
     );
}

const useAuth = () => {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth };