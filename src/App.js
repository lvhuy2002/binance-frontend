import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderComp from './components/HeaderComp';
import MarketPage from './components/MarketPage/MarketPage';
import CoinPage from './components/CoinPage/CoinPage';
import TradePage from './components/TradePage/TradePage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const App = () => {
    return (
        <div>
            <HeaderComp />
            <Routes>
                <Route path="/" element= {<CoinPage />} />
                <Route path="/market" element={<MarketPage />} />
                <Route path="/trade/:symbol" element={<TradePage />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
            </Routes>
        </div>
    )
}
export default App;
