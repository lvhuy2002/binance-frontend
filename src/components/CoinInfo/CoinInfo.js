import React, {useState, useContext, useEffect} from "react";
import { GlobalContext } from "../../GlobalState/GlobalContext";
import './CoinInfo.css'
const CoinInfo = () => {
    const GlobalState = useContext(GlobalContext);
    const [DataAllToken,SetDataAllToken] = useState([])
    const URL = window.location.pathname;
    const URLReal = URL.replaceAll("%20", " ")
    var selectedToken;
    useEffect(() => {
        fetch("http://52.140.197.200:8080/tokens/")
            .then(res => res.json())
            .then(pos => SetDataAllToken(pos))
            .catch(err => console.log(err))
    },[])
    for (var Token of DataAllToken) {
        if ('/coin/' + Token.tokenname === URLReal) {
            selectedToken = Token
        }
    }
    //console.log(selectedToken);
    if (typeof(selectedToken) === "undefined") {
        return (
            <div className="coinInfo">
                <div className="loadingSelectedToken">
                    <div className="LoadingRectangleM"></div>
                    <div className="LoadingRectangleM"></div>
                    <div className="LoadingRectangleM"></div>
                    <div className="LoadingRectangleM"></div>
                    <div className="LoadingRectangleM"></div>
                </div>
            </div>
            
        )
    }
    return (
        <div className="coinInfo">
            <div className="coinName">
                 <img src={selectedToken.tokenimage} className = 'selectedTokenImage' alt='TokenImg'/>
                <h2>{selectedToken.tokenname} ({selectedToken.tokensymbol.toUpperCase()})</h2>
            </div>
            <h1 className="coinPrice">{selectedToken.coingeckoprice.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h1>
            <div className="props">
                <div className="properties">
                    <h5 className="leftProperties">Market Cap:</h5>
                    <h5 className="rightProperties">{selectedToken.marketcap.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h5>
                </div>
                <div className="properties">
                    <h5 className="leftProperties">Total Supply:</h5>
                    <h5 className="rightProperties">{selectedToken.totalsupply.toLocaleString('en-US',{ minimumFractionDigits: 0 })}</h5>
                </div>
                <div className="properties">
                    <h5 className="leftProperties">Max Supply:</h5>
                    <h5 className="rightProperties">{selectedToken.maxsupply.toLocaleString('en-US',{ minimumFractionDigits: 0 })}</h5>
                </div>
            </div>
            
        </div>
    )
}

export default CoinInfo