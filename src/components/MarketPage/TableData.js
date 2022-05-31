import React, {useEffect, useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import {GlobalContext} from '../../GlobalState/GlobalContext'
const TableData = (props) => {
    var MarketBitcoin = props.DataAllMarket.filter(Data => {
        return Data.token2 === "Bitcoin" || Data.token1 === "Bitcoin"
    });
    var MarketEthereum = props.DataAllMarket.filter(Data => {
        return Data.token2 === "Ethereum" || Data.token1 === "Ethereum"
    });
    var MarketTether = props.DataAllMarket.filter(Data => {
        return Data.token2 === "Tether" || Data.token1 === "Tether"
    });
    var MarketBNB = props.DataAllMarket.filter(Data => {
        return Data.token2 === "BNB" || Data.token1 === "BNB"
    });
    var MarketUSDC = props.DataAllMarket.filter(Data => {
        return Data.token2 === "USD Coin" || Data.token1 === "USD Coin"
    }); 
    
    if (props.Default === "BTC") {
        return (
            <div>
                <div className='HeaderData'>
                    <h5>Pair</h5>
                    <h5>Last Price</h5>
                    <h5>24h High</h5>   
                    <h5>24h Low</h5>
                    <h5>24h Volume</h5>
                </div>
                <div className='TableData'>
                    {
                        MarketBitcoin.map((Market, id) => {
                            return (
                                <div>
                                    <Link to = {'/trade/' + Market.MarketSymbolLink.toUpperCase()} key = {id} className="Link"> 
                                    <div className='Data'>
                                            <h5>{Market.MarketSymbol.toUpperCase()}</h5>
                                            <h5>{Market.lastprice.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h5>
                                            <h5>{Market.high.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h5>
                                            <h5>{Market.low.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h5>
                                            <h5>{Market.volume.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h5>
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
    if (props.Default === "ETH") {
        return (
            <div>
                <div className='HeaderData'>
                    <h5>Pair</h5>
                    <h5>Last Price</h5>
                    <h5>24h High</h5>   
                    <h5>24h Low</h5>
                    <h5>24h Volume</h5>
                </div>
                <div className='TableData'>
                    {
                        MarketEthereum.map((Market, id) => {
                            return (
                                <div>
                                    <Link to = {'/trade/' + Market.MarketSymbolLink.toUpperCase()} key = {id} className="Link"> 
                                    <div className='Data'>
                                            <h5>{Market.MarketSymbol.toUpperCase()}</h5>
                                            <h5>{Market.lastprice.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h5>
                                            <h5>{Market.high.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h5>
                                            <h5>{Market.low.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h5>
                                            <h5>{Market.volume.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h5>
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
    if (props.Default === "USDT") {
        return (
            <div>
                <div className='HeaderData'>
                    <h5>Pair</h5>
                    <h5>Last Price</h5>
                    <h5>24h High</h5>   
                    <h5>24h Low</h5>
                    <h5>24h Volume</h5>
                </div>
                <div className='TableData'>
                    {
                        MarketTether.map((Market, id) => {
                            return (
                                <div>
                                    <Link to = {'/trade/' + Market.MarketSymbolLink.toUpperCase()} key = {id} className="Link"> 
                                    <div className='Data'>
                                            <h5>{Market.MarketSymbol.toUpperCase()}</h5>
                                            <h5>{Market.lastprice.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h5>
                                            <h5>{Market.high.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h5>
                                            <h5>{Market.low.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h5>
                                            <h5>{Market.volume.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h5>
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
    if (props.Default === "BNB") {
        return (
            <div>
                <div className='HeaderData'>
                    <h5>Pair</h5>
                    <h5>Last Price</h5>
                    <h5>24h High</h5>   
                    <h5>24h Low</h5>
                    <h5>24h Volume</h5>
                </div>
                <div className='TableData'>
                    {
                        MarketBNB.map((Market, id) => {
                            return (
                                <div>
                                    <Link to = {'/trade/' + Market.MarketSymbolLink.toUpperCase()} key = {id} className="Link"> 
                                    <div className='Data'>
                                            <h5>{Market.MarketSymbol.toUpperCase()}</h5>
                                            <h5>{Market.lastprice.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h5>
                                            <h5>{Market.high.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h5>
                                            <h5>{Market.low.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h5>
                                            <h5>{Market.volume.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h5>
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
    
    return (
        <div>
            <div className='HeaderData'>
                <h5>Pair</h5>
                <h5>Last Price</h5>
                <h5>24h High</h5>   
                <h5>24h Low</h5>
                <h5>24h Volume</h5>
            </div>
            <div className='TableData'>
                {
                    MarketUSDC.map((Market, id) => {
                        return (
                            <div>
                                <Link to = {'/trade/' + Market.MarketSymbolLink.toUpperCase()} key = {id} className="Link"> 
                                <div className='Data'>
                                        <h5>{Market.MarketSymbol.toUpperCase()}</h5>
                                        <h5>{Market.lastprice.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h5>
                                        <h5>{Market.high.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h5>
                                        <h5>{Market.low.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h5>
                                        <h5>{Market.volume.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h5>
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
