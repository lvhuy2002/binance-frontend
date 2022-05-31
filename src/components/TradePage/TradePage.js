import React, {useContext, useState, useEffect} from 'react';
import "./TradePage.css";
import { Navigate } from 'react-router-dom';
import LeftTradePage from './LeftTradePage';
import RightTradePage from './RightTradePage';
import { GlobalContext } from '../../GlobalState/GlobalContext';

const TradePage = () => {
    const GlobalState = useContext(GlobalContext);
    const URL = window.location.pathname;
    const [DataAllMarket, SetDataAllMarket] = useState([]);
    const [DataAllToken, SetDataAllToken] = useState([]);
    const [LastPrice, SetLastPrice] = useState({});
    const [low, SetLow] = useState();
    const [high, SetHigh] = useState();
    const [volume, SetVolume] = useState();
    const [priceState, SetPriceState] = useState();
    useEffect(() => {
        fetch('http://52.140.197.200:8080/market_full/')
            .then(res => res.json())
            .then(post => {
                SetDataAllMarket(post)
        })
    }, []);
    useEffect(() => {
        fetch('http://52.140.197.200:8080/tokens/')
            .then(res => res.json())
            .then(post => {
                SetDataAllToken(post)
            })
            .catch(err => {
                alert("ERROR LOADING TOKEN")
            })
    },[]);
    useEffect(() => {
        const fetching = () => {
            fetch('http://52.140.197.200:8080/market/lastprice/?token1=' + GlobalState.Token1.name + '&token2=' + GlobalState.Token2.name)
                .then(res => res.json())
                .then(post => SetLastPrice(post))
            fetch('http://52.140.197.200:8080/market/high24h/?token1=' + GlobalState.Token1.name + '&token2=' + GlobalState.Token2.name)
                .then(res => res.json())
                .then(post => SetHigh(post))
            fetch('http://52.140.197.200:8080/market/low24h/?token1=' + GlobalState.Token1.name + '&token2=' + GlobalState.Token2.name)
                .then(res => res.json())
                .then(post => SetLow(post))
            fetch('http://52.140.197.200:8080/market/volume24h/?token1=' + GlobalState.Token1.name + '&token2=' + GlobalState.Token2.name)
                .then(res => res.json())
                .then(post => SetVolume(post))
        }        
        const id = setInterval(() => {
            fetching();
        }, 2000)  
        return () => clearInterval(id);
    }, [GlobalState]);
    console.log(LastPrice);
    console.log(priceState)
    console.log(high);
    console.log(low);
    console.log(volume);
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
            {(!DataAllMarket.length || !DataAllToken.length) ? 
            <div className='TradePage'>
                <div className='loadingBlock'>
                    <div className="LoadingRectangleM"></div>
                    <div className="LoadingRectangleM"></div>
                    <div className="LoadingRectangleM"></div>
                    <div className="LoadingRectangleM"></div>
                    <div className="LoadingRectangleM"></div>
                </div>
                
            </div> :
            <div className='TradePage'>
                <LeftTradePage DataAllMarket = {DataAllMarket} URL = {URL} />
                <RightTradePage DataAllMarket = {DataAllMarket}/>
            </div>
            }
        </div>
    )
}
export default TradePage;