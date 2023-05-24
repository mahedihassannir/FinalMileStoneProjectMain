
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPhoneNumber, signInWithPopup, signOut } from 'firebase/auth'

import app from '../AuthProvider/firebase.config';

import { createContext, useEffect, useState } from 'react';
const auth = getAuth(app)


export const contexM = createContext(null)

const ContexSuplier = ({ children }) => {

    // here is user and login systems

    const [user, SetUser] = useState(null)

    const [Loader, SetLoader] = useState(true)

    // here is user and login systems ends

    const provider = new GoogleAuthProvider()

    const LoginUserWIthPopUp = () => {
        SetLoader(true)

        return signInWithPopup(auth, provider)

    }


    const LoginUser = (email, password) => {
        SetLoader(true)
        return signInWithPhoneNumber(auth, email, password)
    }

    const createUser = (email, password) => {
        SetLoader(true)

        return createUserWithEmailAndPassword(auth, email, password)
        

    }

    const LogoutUser = () => {
        return signOut(auth)
    }



    // here is teh user observer 


    useEffect(() => {
        const off = onAuthStateChanged(auth, watch => {
            SetUser(watch)
            console.log('user is ob obserbing', watch);
            SetLoader(false)
        })
        return () => {
            return off
        }
    }, [])


    const userInfos = {
        LoginUser,
        createUser,
        LogoutUser,
        Loader,
        user,
        LoginUserWIthPopUp


    }


    return <contexM.Provider value={userInfos}>
        {children}
    </contexM.Provider>

};

export default ContexSuplier;