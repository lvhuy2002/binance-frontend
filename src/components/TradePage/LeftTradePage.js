import React from 'react';
import "./TradePage.css";
import HeaderTradePage from './HeaderTradePage/HeaderTradePage';
import SellBuyOrderTradePage from './SellBuyOrderTradePage/SellBuyOrderTradePage';
import ChartTradePage from './Chart/ChartTradePage';
import Transaction from './Transaction/Transaction';
const LeftTradePage = (props) => {
    return (
        <div>
            <HeaderTradePage DataAllMarket = {props.DataAllMarket} URL = {props.URL} />
            <div className='TradePageBody'>
                <SellBuyOrderTradePage DataAllMarket = {props.DataAllMarket} URL = {props.URL}/>
                <div className='MidTradePage'>
                    <ChartTradePage/>
                    <Transaction/>
                </div>
            </div>
        </div>
    )
}
export default LeftTradePage;