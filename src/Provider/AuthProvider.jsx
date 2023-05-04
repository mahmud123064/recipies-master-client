import React, { createContext, useEffect, useState } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword
} from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("{}");

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, (loggedInUser) => {
            setUser(loggedInUser)
        });
        return () => {
            unSubcribe();
        }
    }, []);

    const authInfo = { registerUser, user, logOut, loginUser };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;