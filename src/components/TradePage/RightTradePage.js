import React from 'react'
import MarketListTradePage from './MarketListTradePage/MarketListTradePage'
import MarketTrade from './MarketTrade/MarketTrade'
import "./TradePage.css"

function RightTradePage(props) {
    return (
        <div className='RightTradePage'>
            <MarketListTradePage DataAllMarket = {props.DataAllMarket}/>
            <MarketTrade/>
        </div>
    )
}

export default RightTradePage