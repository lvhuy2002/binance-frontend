import React from 'react'
import MarketListTradePage from './MarketListTradePage/MarketListTradePage'
import MarketTrade from './MarketTrade/MarketTrade'
import "./TradePage.css"

function RightTradePage() {
    return (
        <div className='RightTradePage'>
            <MarketListTradePage/>
            <MarketTrade/>
        </div>
    )
}

export default RightTradePage