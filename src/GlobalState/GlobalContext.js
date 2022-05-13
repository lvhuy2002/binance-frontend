import React, { useState, createContext } from 'react';
import { useLocalStorage } from './useLocalStorage';

const GlobalContext = createContext()

function GlobalProvide( {children}) {
    const [user, SetUser] = useLocalStorage('user','');
    const [checkLogin, SetCheckLogin] = useLocalStorage('checkLogin',false);
    const [Token1, SetToken1] = useState({name: '', symbol: ''});
    const [Token2, SetToken2] = useState({name: '', symbol: ''});
    const value = {
        user,
        SetUser,
        checkLogin,
        SetCheckLogin,
        Token1,
        SetToken1,
        Token2,
        SetToken2
    }
    
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalContext, GlobalProvide}