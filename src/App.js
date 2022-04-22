import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderComp from './components/HeaderComp';
import HomePage from './components/HomePage/HomePage';
import TradePage from './components/TradePage/TradePage';

const App = () => {
    return (
        <div>
            <HeaderComp />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/trade/:symbol" element={<TradePage />}/>
                
            </Routes>
        </div>
    )
}
export default App;
