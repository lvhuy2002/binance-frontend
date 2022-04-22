import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

var MarketListBTC = [
    {name: 'BTC/ETH', symbol: 'BTC_ETH', price: 9999999, change: '0.99%', volume: 99999999},
    {name:'BTC/USDT', symbol: 'BTC_USDT', price: 9999999, change: '0.99%', volume: 99999999},
    {name:'BTC/BNB', symbol: 'BTC_BNB', price: 9999999, change: '0.99%', volume: 99999999},
    {name:'BTC/USDC', symbol: 'BTC_USDC', price: 9999999, change: '0.99%', volume: 99999999}
];
var MarketListETH = [
    {name:'ETH/BTC', symbol: 'ETH_BTC', price: 9999999, change: '0.99%', volume: 99999999},
    {name:'ETH/USDT', symbol: 'ETH_USDT', price: 9999999, change: '0.99%', volume: 99999999},
    {name:'ETH/BNB', symbol: 'ETH_BNB', price: 9999999, change: '0.99%', volume: 99999999},
    {name:'ETH/USDC', symbol: 'ETH_USDC', price: 9999999, change: '0.99%', volume: 99999999}
];
var MarketListUSDT = [
    {name:'USDT/BTC', symbol: 'USDT_BTC', price: 9999999, change: '0.99%', volume: 99999999},
    {name:'USDT/ETH', symbol: 'USDT_ETH', price: 9999999, change: '0.99%', volume: 99999999},
    {name:'USDT/BNB', symbol: 'USDT_BNB', price: 9999999, change: '0.99%', volume: 99999999},
    {name:'USDT/USDC', symbol: 'USDT_USDC', price: 9999999, change: '0.99%', volume: 99999999}
];
var MarketListBNB = [
    {name:'BNB/BTC', symbol: 'BNB_BTC', price: 9999999, change: '0.99%', volume: 99999999},
    {name:'BNB/ETH', symbol: 'BNB_ETH', price: 9999999, change: '0.99%', volume: 99999999},
    {name:'BNB/USDT', symbol: 'BNB_USDT', price: 9999999, change: '0.99%', volume: 99999999},
    {name:'BNB/USDC', symbol: 'BNB_USDC', price: 9999999, change: '0.99%', volume: 99999999}
];
var MarketListUSDC = [
    {name:'USDC/BTC', symbol: 'USDC_BTC', price: 9999999, change: '0.99%', volume: 99999999},
    {name:'USDC/ETH', symbol: 'USDC_ETH', price: 9999999, change: '0.99%', volume: 99999999},
    {name:'USDC/USDT', symbol: 'USDC_USDT', price: 9999999, change: '0.99%', volume: 99999999},
    {name:'USDC/BNB', symbol: 'USDC_BNB', price: 9999999, change: '0.99%', volume: 99999999}
];
function MarketData(props) {
    const [MarketData, SetMarketData] = useState(MarketListBTC);
    useEffect(() =>{
        if (props.stateMarket === "BTC") {SetMarketData(MarketListBTC);}
        if (props.stateMarket === "ETH") {SetMarketData(MarketListETH);}
        if (props.stateMarket === "USDT") {SetMarketData(MarketListUSDT);}
        if (props.stateMarket === "BNB") {SetMarketData(MarketListBNB);}
        if (props.stateMarket === "USDC") {SetMarketData(MarketListUSDC);}
    }, [props.stateMarket])

    return (
        <div>
            {
                MarketData.map((Market, key) => {
                    return (
                        <Link to = {'/trade/' + Market.symbol} key = {key} className="Link" >
                        <div className='DataEachMarket'>
                            <h6 className='PairMarket'>{Market.name}</h6>
                            <h6 className='PriceMarket'>{Market.price}</h6>
                            <h6 className='ChangeVolumeMarket'>{props.stateChange === 'Change' ? Market.change : Market.volume}</h6>
                        </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default MarketData