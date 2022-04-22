import React from 'react';
import "./TradePage.css";
import HeaderTradePage from './HeaderTradePage/HeaderTradePage';
import SellBuyOrderTradePage from './SellBuyOrderTradePage/SellBuyOrderTradePage';
import Chart from './Chart/Chart';
import Transaction from './Transaction/Transaction';
const LeftTradePage = () => {
    return (
        <div>
            <HeaderTradePage />
            <div className='TradePageBody'>
                <SellBuyOrderTradePage />
                <div className='MidTradePage'>
                    <Chart/>
                    <Transaction/>
                </div>
            </div>
        </div>
    )
}
export default LeftTradePage;