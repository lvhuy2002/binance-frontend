import React from 'react'

function MarketTradesData(props) {
    if (props.MarketOrMyTrades === 'MyTrades'){
        return (
            <div>
                
            </div>
        )
    }
    return (
        <div>
            <div className='TitleMarketTrades'>
                <h6 className='LeftTitle1'>Price(USDT)</h6>
                <h6 className='RightTitle1'>Amount(SHIB)</h6>
                <h6 className='RightTitle2'>Time</h6>             
            </div>
        </div>
    )
}

export default MarketTradesData