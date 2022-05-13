import React, { useState, useEffect, useContext }  from 'react';
import TableData from './TableData';
import { GlobalContext } from '../../GlobalState/GlobalContext';
const DataMarketLoading = () => {
    return (
        <div className="LoadingMarket">
            <div className="LoadingMarkett">
                <div className="LoadingRectangleM"></div>
                <div className="LoadingRectangleM"></div>
                <div className="LoadingRectangleM"></div>
                <div className="LoadingRectangleM"></div>
                <div className="LoadingRectangleM"></div>
            </div>
        </div>
        
    )
}
const MarketPage = () => {
    const [MarketDefault, SetMarket] = useState("BTC");
    const [DataAllMarket, SetDataAllMarket] = useState([]);
    const [DataAllToken, SetDataAllToken] = useState([]);

    useEffect(() => {
            fetch('http://52.140.197.200/markets/')
                .then(res => res.json())
                .then(post => {
                    SetDataAllMarket(post)
                })
                .catch(err => {
                    alert("ERROR LOADING MARKET")
                })
    },[]);
    useEffect(() => {
            fetch('http://52.140.197.200/tokens/')
                .then(res => res.json())
                .then(post => {
                    SetDataAllToken(post)
                })
                .catch(err => {
                    alert("ERROR LOADING TOKEN")
                })
    },[]);
    if (DataAllMarket.length && DataAllToken.length) {
        for (var Market of DataAllMarket) {
            var TokenSymbol1, TokenSymbol2;
            for(var Token of DataAllToken) {
                if (Token.tokenname === Market.token1) {TokenSymbol1 = Token.tokensymbol}
                if (Token.tokenname === Market.token2) {TokenSymbol2 = Token.tokensymbol}
            }
            Market.token1Symbol = TokenSymbol1;
            Market.token2Symbol = TokenSymbol2;
            Market.MarketSymbol = TokenSymbol1 + '/' + TokenSymbol2
            Market.MarketSymbolLink = TokenSymbol1 + '_' + TokenSymbol2
        }
    }

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
                        BTC Market
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
                    {(!DataAllMarket.length || !DataAllToken.length) ? <DataMarketLoading/> : <TableData Default = {MarketDefault} DataAllMarket = {DataAllMarket} DataAllToken = {DataAllToken} /> }
                </div>

            </div>
        </div>
    )
}
export default MarketPage;
