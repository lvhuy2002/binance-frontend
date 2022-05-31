import React, {useEffect, useContext} from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderComp from './components/HeaderComp';
import MarketPage from './components/MarketPage/MarketPage';
import CoinPage from './components/CoinPage/CoinPage';
import TradePage from './components/TradePage/TradePage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import UserPage from './components/User/UserPage';
import CoinInfo from './components/CoinInfo/CoinInfo';
import { GlobalContext } from './GlobalState/GlobalContext';
const App = () => {
    const GlobalState = useContext(GlobalContext);
    useEffect(() => {    
        if (GlobalState.isReloading > 0) {
            setTimeout(() => {
                GlobalState.SetReloading(GlobalState.isReloading - 1)
            }, 50)
        }
    }, [GlobalState.isReloading]);
    return (
        <div>
            {(GlobalState.isReloading > 0) ? <div></div> :
            <div>
                <HeaderComp />
                <Routes>
                    <Route path="/" element= {<CoinPage />} />
                    <Route path="/market" element={<MarketPage />} />
                    <Route path="/trade/:symbol" element={<TradePage />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/user" element = {<UserPage />} />
                    <Route path="/coin/:symbol" element = {<CoinInfo/>} />
                </Routes>
            </div>
            }
            
        </div>
    )
}
export default App;
