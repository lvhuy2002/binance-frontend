import React from 'react';
import "./TradePage.css";
import LeftTradePage from './LeftTradePage';
import RightTradePage from './RightTradePage';
const TradePage = () => {
    return (
        <div className='TradePage'>
            <LeftTradePage />
            <RightTradePage />
        </div>
    )
}
export default TradePage;