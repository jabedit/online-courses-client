import React, { createContext, } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const  AuthContext = createContext()
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const googleLogin =()=>{
       return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    }

    const createUser = ( email, password) =>{
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const userSingUp = ( email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    

    const authInfo = { googleLogin, githubLogin, createUser, userSingUp}
    return (
        <div>
           <AuthContext.Provider value={authInfo}>
                {children}
           </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;