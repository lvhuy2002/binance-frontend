import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

var MarketListBTC = [
    {name: 'BTC/ETH', symbol: 'BTC_ETH' },
    {name:'BTC/USDT', symbol: 'BTC_USDT'},
    {name:'BTC/BNB', symbol: 'BTC_BNB'},
    {name:'BTC/USDC', symbol: 'BTC_USDC'}
];
var MarketListETH = [
    {name:'ETH/BTC', symbol: 'ETH_BTC'},
    {name:'ETH/USDT', symbol: 'ETH_USDT'},
    {name:'ETH/BNB', symbol: 'ETH_BNB'},
    {name:'ETH/USDC', symbol: 'ETH_USDC'}
];
var MarketListUSDT = [
    {name:'USDT/BTC', symbol: 'USDT_BTC'},
    {name:'USDT/ETH', symbol: 'USDT_ETH'},
    {name:'USDT/BNB', symbol: 'USDT_BNB'},
    {name:'USDT/USDC', symbol: 'USDT_USDC'}
];
var MarketListBNB = [
    {name:'BNB/BTC', symbol: 'BNB_BTC'},
    {name:'BNB/ETH', symbol: 'BNB_ETH'},
    {name:'BNB/USDT', symbol: 'BNB_USDT'},
    {name:'BNB/USDC', symbol: 'BNB_USDC'}
];
var MarketListUSDC = [
    {name:'USDC/BTC', symbol: 'USDC_BTC'},
    {name:'USDC/ETH', symbol: 'USDC_ETH'},
    {name:'USDC/USDT', symbol: 'USDC_USDT'},
    {name:'USDC/BNB', symbol: 'USDC_BNB'}
];

const TableData = (props) => {
    const [MarketData, SetMarketData] = useState(MarketListBTC);
    useEffect(() =>{
        if (props.Default === "BTC") {SetMarketData(MarketListBTC);}
        if (props.Default === "ETH") {SetMarketData(MarketListETH);}
        if (props.Default === "USDT") {SetMarketData(MarketListUSDT);}
        if (props.Default === "BNB") {SetMarketData(MarketListBNB);}
        if (props.Default === "USDC") {SetMarketData(MarketListUSDC);}
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
                                <Link to = {'/trade/' + Market.symbol} key = {id} className="Link" > 
                                <div className='Data'>
                                        <h5>{Market.name}</h5>
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
