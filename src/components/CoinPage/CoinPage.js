import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './CoinPage.css'
const DataCoinLoading = () => {
    return (
        <div className="LoadingCoin">
            <div className="LoadingRectangle"></div>
            <div className="LoadingRectangle"></div>
            <div className="LoadingRectangle"></div>
            <div className="LoadingRectangle"></div>
            <div className="LoadingRectangle"></div>
        </div>
    )
}

const DataCoin = (props) => {
    return (
        <div>
            {
                props.DataAllToken.map(Token => {
                    return (
                        <div>
                            <Link to = {'/'} className='DataToken'>
                                <img src={Token.tokenimage} className = 'TokenImage' alt='TokenImg'/>
                                <h5 className="TokenName">{Token.tokenname}</h5>
                                <h5 className="TokenSymbol">{Token.tokensymbol.toUpperCase()}</h5>
                                <h5 className="TokenPrice">{Token.coingeckoprice.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h5>
                                <h5 className="TokenMarketCap">{Token.marketcap.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h5>
                            </Link>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}

const CoinPage = () => {
    const [DataAllToken, SetDataAllToken] = useState([]);
    useEffect(() => {
        fetch('http://52.140.197.200/tokens/')
        .then(res => res.json())
        .then(post => {
            SetDataAllToken(post) 
        })
        .catch(error => alert("ERROR LOADING TOKEN"))
    },[])
    DataAllToken.sort(function(tk1, tk2) {return tk2.marketcap - tk1.marketcap})
    return (

        <div className='cover'>
            <div className='cover_top'>
                <h1>Trading coin to change life</h1>
                <p>The world s largest coin trading website</p>
            </div>
            <div className="TokenList">
                <div className="space"></div>
                <div className='TitleTokenCoinPage'>
                    <h5 className="CoinTitleCoinPage">Coin</h5>
                    <h5 className="PriceTitleCoinPage">Price</h5>
                    <h5 className="MktCapTitleCoinPage">Mkt Cap</h5>
                </div>
                {!DataAllToken.length ? <DataCoinLoading/> : <DataCoin DataAllToken = {DataAllToken} />}
            </div>
        </div>
    )
}

export default CoinPage