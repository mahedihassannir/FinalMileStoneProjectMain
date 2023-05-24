
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPhoneNumber, signOut } from 'firebase/auth'

const auth = getAuth(app)

import { createContext, useEffect, useState } from 'react';
import app from './firebase.config';

export const contexM = createContext(null)

const ContexSuplier = ({ children }) => {

    // here is user and login systems

    const [user, SetUser] = useState(null)

    const [Loader, SetLoader] = useState(true)

    // here is user and login systems ends



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
            off
        }
    }, [])


    const userInfos = {
        LoginUser,
        createUser,
        LogoutUser,
        Loader,
        user


    }


    return <contexM.Provider value={userInfos}>
        {children}
    </contexM.Provider>

};

export default ContexSuplier;