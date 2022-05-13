import React, {useContext, useState, useEffect} from 'react';
import "./TradePage.css";
import { Navigate } from 'react-router-dom';
import LeftTradePage from './LeftTradePage';
import RightTradePage from './RightTradePage';


const TradePage = () => {
    
    const URL = window.location.pathname;
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
        <div>
            {(!DataAllMarket.length || !DataAllToken.length) ? <h1>Loading</h1> :
            <div className='TradePage'>
                <LeftTradePage DataAllMarket = {DataAllMarket} URL = {URL} />
                <RightTradePage />
            </div>
            }
        </div>
    )
}
export default TradePage;