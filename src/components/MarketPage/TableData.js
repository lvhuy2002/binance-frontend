import React, {useEffect, useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import {GlobalContext} from '../../GlobalState/GlobalContext'
const TableData = (props) => {
    const GlobalState = useContext(GlobalContext);

    var MarketBitcoin = props.DataAllMarket.filter(Data => {
        return Data.token2 === "Bitcoin"
    });
    var MarketEthereum = props.DataAllMarket.filter(Data => {
        return Data.token2 === "Ethereum"
    });
    var MarketTether = props.DataAllMarket.filter(Data => {
        return Data.token2 === "Tether"
    });
    var MarketBNB = props.DataAllMarket.filter(Data => {
        return Data.token2 === "BNB"
    });
    var MarketUSDC = props.DataAllMarket.filter(Data => {
        return Data.token2 === "USD Coin"
    }); 
    
    const [MarketData, SetMarketData] = useState(MarketBitcoin)
    //console.log(props.DataAllMarket)
    
    //console.log(MarketBitcoin);
    useEffect(() =>{
        if (props.Default === "BTC") {SetMarketData(MarketBitcoin)}
        if (props.Default === "ETH") {SetMarketData(MarketEthereum)}
        if (props.Default === "USDT") {SetMarketData(MarketTether)}
        if (props.Default === "BNB") {SetMarketData(MarketBNB)}
        if (props.Default === "USDC") {SetMarketData(MarketUSDC)}
    }, [props.Default])
    return (
        <div>
            <div className='HeaderData'>
                <h5>Pair</h5>
                <h5>Last Price</h5>
                <h5>24h Change</h5>
                <h5>24h High</h5>   
                <h5>24h Low</h5>
                <h5>24h Volume</h5>
            </div>
            <div className='TableData'>
                {
                    MarketData.map((Market, id) => {
                        return (
                            <div>
                                <Link to = {'/trade/' + Market.MarketSymbolLink.toUpperCase()} key = {id} className="Link"> 
                                <div className='Data'>
                                        <h5>{Market.MarketSymbol.toUpperCase()}</h5>
                                        <h5>999999</h5>
                                        <h5>999999</h5>
                                        <h5>999999</h5>
                                        <h5>999999</h5>
                                        <h5>999999</h5>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default TableData;
