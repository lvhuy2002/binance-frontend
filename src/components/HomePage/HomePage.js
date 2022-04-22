import React, { useState }  from 'react';
import TableData from './TableData';

const HomePage = () => {
    const [MarketDefault, SetMarket] = useState("BTC");
    return (
        <div className='cover'>
            <div className='cover_top'>
                <h1>Trading coin to change life</h1>
                <p>The world s largest coin trading website</p>
            </div>
            <div className='cover_bottom'>
                <div className='space'></div>
                <div className='market_button'>
                    <button className = {MarketDefault === "BTC" ? "selectedB" : "unselectedB"} onClick = {() => SetMarket("BTC")}>
                        BTA Market
                    </button>
                    <button className = {MarketDefault === "ETH" ? "selectedB" : "unselectedB"} onClick = {() => SetMarket("ETH")}>
                        ETH Market
                    </button>
                    <button className = {MarketDefault === "USDT" ? "selectedB" : "unselectedB"} onClick = {() => SetMarket("USDT")}>
                        USDT Market
                    </button>
                    <button className = {MarketDefault === "BNB" ? "selectedB" : "unselectedB"} onClick = {() => SetMarket("BNB")}>
                        BNB Market
                    </button>
                    <button className = {MarketDefault === "USDC" ? "selectedB" : "unselectedB"} onClick = {() => SetMarket("USDC")}>
                        USDC Market
                    </button>
                </div>
                <div>
                    <TableData 
                        Default = {MarketDefault}
                    />
                </div>

            </div>
        </div>
    )
}
export default HomePage;
