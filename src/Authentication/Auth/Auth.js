import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';


export const authContext=createContext();
const auth= getAuth(app);

const Auth = ({children}) => {

const [user, setUser]= useState('None');
const [loading, isLoading]= useState(true);

const providerLogin=(provider)=>{
    isLoading(true);
    return signInWithPopup(auth, provider);
};

const providerLogout=()=>{
    isLoading(true);
    return signOut(auth);
};

useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
        console.log('user state changed', currentUser);
        setUser(currentUser);
        isLoading(false);
    });

    return()=>{
        unsubscribe();
    }
},[])

const authInfo={user, loading,providerLogin, providerLogout};
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default Auth;