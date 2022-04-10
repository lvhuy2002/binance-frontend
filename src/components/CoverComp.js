import React, { useState }  from 'react';

var MarketList = [ 
    {id: 0, type: "selected", name: "BTC Market" },
    {id: 1, type: "unselected", name: "ETH Market"},
    {id: 2, type: "unselected", name: "USDT Market"},
    {id: 3, type: "unselected", name: "BNB Market"},
    {id: 4, type: "unselected", name: "USDC Market"}
]

const CoverComp = () => {
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
                

            </div>
        </div>
    )
}
export default CoverComp;
