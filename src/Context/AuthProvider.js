import React, { createContext, } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import app from '../Firebase/firebase.config';
const auth = getAuth(app);
export const  AuthContext = createContext()
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const googleLogin =()=>{
       return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    }

    const createUser = (email, password) =>{
        
    }

    

    const authInfo = { googleLogin, githubLogin}
    return (
        <div>
           <AuthContext.Provider value={authInfo}>
                {children}
           </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;