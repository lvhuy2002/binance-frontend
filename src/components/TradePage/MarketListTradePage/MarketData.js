import React, {useEffect, useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../../GlobalState/GlobalContext';

function MarketData(props) {
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
    function nFormatter(num) {
        if (num >= 1000000000) {
           return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
        }
        if (num >= 1000000) {
           return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        return num;
    }
    if (props.stateMarket === "BTC") {
        return (
            <div className='MarketData'>
                {
                    MarketBitcoin.map((Market, key) => {
                        return (
                            <Link to = {'/trade/' + Market.MarketSymbolLink.toUpperCase()} key = {key} className="Link" 
                            onClick={() => {
                                GlobalState.SetToken1({name: Market.token1, symbol: Market.token1Symbol});
                                GlobalState.SetToken2({name: Market.token2, symbol: Market.token2Symbol});
                            }}>
                            <div className='DataEachMarket'>
                                <h6 className='PairMarket' style={{marginLeft: '10px'}}>{Market.MarketSymbol.toUpperCase()}</h6>
                                <h6 className={(Market.state === 'INC') ? 'PriceMarketINC' : 'PriceMarketDEC'}>{Market.lastprice.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h6>
                                <h6 className='ChangeVolumeMarket'>{Market.volume>=1000000 ? nFormatter(Market.volume) : Market.volume.toLocaleString('en-US',{ minimumFractionDigits: 2})}</h6>
                            </div>
                            </Link>
                        )
                    })
                }
            </div>
        ) 
    }
    if (props.stateMarket === "ETH") {
        return (
            <div className='MarketData'>
                {
                    MarketEthereum.map((Market, key) => {
                        return (
                            <Link to = {'/trade/' + Market.MarketSymbolLink.toUpperCase()} key = {key} className="Link" 
                            onClick={() => {
                                GlobalState.SetToken1({name: Market.token1, symbol: Market.token1Symbol});
                                GlobalState.SetToken2({name: Market.token2, symbol: Market.token2Symbol});
                            }}>
                            <div className='DataEachMarket'>
                                <h6 className='PairMarket' style={{marginLeft: '10px'}}>{Market.MarketSymbol.toUpperCase()}</h6>
                                <h6 className={(Market.state === 'INC') ? 'PriceMarketINC' : 'PriceMarketDEC'}>{Market.lastprice.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h6>
                                <h6 className='ChangeVolumeMarket'>{Market.volume>=1000000 ? nFormatter(Market.volume) : Market.volume.toLocaleString('en-US',{ minimumFractionDigits: 2})}</h6>
                            </div>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
    if (props.stateMarket === "USDT") {
        return (
            <div className='MarketData'>
                {
                    MarketTether.map((Market, key) => {
                        return (
                            <Link to = {'/trade/' + Market.MarketSymbolLink.toUpperCase()} key = {key} className="Link" 
                            onClick={() => {
                                GlobalState.SetToken1({name: Market.token1, symbol: Market.token1Symbol});
                                GlobalState.SetToken2({name: Market.token2, symbol: Market.token2Symbol});
                            }}>
                            <div className='DataEachMarket'>
                                <h6 className='PairMarket' style={{marginLeft: '10px'}}>{Market.MarketSymbol.toUpperCase()}</h6>
                                <h6 className={(Market.state === 'INC') ? 'PriceMarketINC' : 'PriceMarketDEC'}>{Market.lastprice.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h6>
                                <h6 className='ChangeVolumeMarket'>{Market.volume>=1000000 ? nFormatter(Market.volume) : Market.volume.toLocaleString('en-US',{ minimumFractionDigits: 2})}</h6>
                            </div>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
    if (props.stateMarket === "BNB") {
        return (
            <div className='MarketData'>
                {
                    MarketBNB.map((Market, key) => {
                        return (
                            <Link to = {'/trade/' + Market.MarketSymbolLink.toUpperCase()} key = {key} className="Link" 
                            onClick={() => {
                                GlobalState.SetToken1({name: Market.token1, symbol: Market.token1Symbol});
                                GlobalState.SetToken2({name: Market.token2, symbol: Market.token2Symbol});
                            }}>
                            <div className='DataEachMarket'>
                                <h6 className='PairMarket' style={{marginLeft: '10px'}}>{Market.MarketSymbol.toUpperCase()}</h6>
                                <h6 className={(Market.state === 'INC') ? 'PriceMarketINC' : 'PriceMarketDEC'}>{Market.lastprice.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h6>
                                <h6 className='ChangeVolumeMarket'>{Market.volume>=1000000 ? nFormatter(Market.volume) : Market.volume.toLocaleString('en-US',{ minimumFractionDigits: 2})}</h6>
                            </div>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <div className='MarketData'>
            {
                MarketUSDC.map((Market, key) => {
                    return (
                        <Link to = {'/trade/' + Market.MarketSymbolLink.toUpperCase()} key = {key} className="Link" 
                        onClick={() => {
                            GlobalState.SetToken1({name: Market.token1, symbol: Market.token1Symbol});
                            GlobalState.SetToken2({name: Market.token2, symbol: Market.token2Symbol});
                        }}>
                        <div className='DataEachMarket'>
                            <h6 className='PairMarket' style={{marginLeft: '10px'}}>{Market.MarketSymbol.toUpperCase()}</h6>
                            <h6 className={(Market.state === 'INC') ? 'PriceMarketINC' : 'PriceMarketDEC'}>{Market.lastprice.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h6>
                            <h6 className='ChangeVolumeMarket'>{Market.volume>=1000000 ? nFormatter(Market.volume) : Market.volume.toLocaleString('en-US',{ minimumFractionDigits: 2})}</h6>
                        </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default MarketData