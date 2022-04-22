import React, {useState} from 'react'
import "./MarketTrade.css"
import MarketTradesData from './MarketTradesData'
function MarketTrade() {
    const [MarketOrMyTrades,SetMarketOrMyTrades] = useState('MarketTrades')
    return (
        <div className='MarketTrade'>
            <div className='MarketOrMyTrades'>
                <h5 style={{marginRight: '20px'}} className={MarketOrMyTrades === 'MarketTrades' ? 'SOption' : 'USOption'}
                onClick = {() => SetMarketOrMyTrades('MarketTrades')}>
                Market Trades
                </h5>
                <h5 className={MarketOrMyTrades === 'MyTrades' ? 'SOption' : 'USOption'} onClick = {() => SetMarketOrMyTrades('MyTrades')}>
                My Trades
                </h5>
            </div>
            <MarketTradesData
                MarketOrMyTrades = {MarketOrMyTrades}
            />
        </div>
    )
}

export default MarketTrade