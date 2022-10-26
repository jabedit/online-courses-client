import React, { createContext, } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { useEffect , useState } from 'react';


export const  AuthContext = createContext()
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const googleLogin =()=>{
        setLoading(true)
       return signInWithPopup(auth, googleProvider)
       
    }

    const githubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const createUser = ( email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const userSingUp = ( email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile =(profile) =>{
        return updateProfile(auth.currentUser , profile)
    }
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe();
        }
    })
    

    const authInfo = { user, googleLogin, githubLogin, createUser, userSingUp, logOut, loading, updateUserProfile}
    return (
        <div>
           <AuthContext.Provider value={authInfo}>
                {children}
           </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;