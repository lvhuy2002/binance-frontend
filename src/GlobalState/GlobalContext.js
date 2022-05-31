import React, { useState, createContext } from 'react';
import { useLocalStorage } from './useLocalStorage';

const GlobalContext = createContext()

function GlobalProvide( {children}) {
    const [user, SetUser] = useLocalStorage('user','');
    const [userBio, SetUserBio] = useLocalStorage('userBio','');
    const [checkLogin, SetCheckLogin] = useLocalStorage('checkLogin',false);
    const [Token1, SetToken1] = useState({name: '', symbol: ''});
    const [Token2, SetToken2] = useState({name: '', symbol: ''});
    const [coin, SetCoin] = useState('');
    const [isReloading, SetReloading] = useState(0);
    const value = {
        user,
        SetUser,
        userBio,
        SetUserBio,
        checkLogin,
        SetCheckLogin,
        Token1,
        SetToken1,
        Token2,
        SetToken2,
        coin,
        SetCoin,
        isReloading,
        SetReloading
    }
    
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalContext, GlobalProvide}