import React, {useState} from 'react'
import "./SellBuyOrderTradePage.css"
import DataOrderBook from './DataOrderBook';

function SellBuyOrderTradePage() {
    const [state, setState] = useState('OrderBook');
    return (
        <div className='SellBuyOrder'>
            <div className='Option'>
                <div className='OrderBookButton' onClick={() => setState('OrderBook')}>
                    <div>
                        <div className='RedSquare'></div>
                        <div className='GreenSquare'></div>
                    </div>
                    <div>
                        <div className='GreyRectangle'></div>
                        <div className='GreyRectangleMid'></div>
                        <div className='GreyRectangle'></div>
                    </div>
                </div>
                <div className='BuyOrderButton' onClick={() => setState('BuyOrder')}>
                    <div>
                        <div className='GreenRectangle'></div>
                    </div>
                    <div>
                        <div className='GreyRectangle'></div>
                        <div className='GreyRectangleMid'></div>
                        <div className='GreyRectangle'></div>
                    </div>
                </div>
                <div className='SellOrderButton' onClick={() => setState('SellOrder')}>
                    <div>
                        <div className='RedRectangle'></div>
                    </div>
                    <div>
                        <div className='GreyRectangle'></div>
                        <div className='GreyRectangleMid'></div>
                        <div className='GreyRectangle'></div>
                    </div>
                </div>
            </div>
            <div className='TitleDataOrderBook'>
                <h6 className='TitleLeftDataOrderBook'>Price(USDT)</h6>
                <h6 className='TitleRightDataOrderBook'>Amount(SHIB)</h6>
                <h6 className='TitleRightDataOrderBook'>Total</h6>
            </div>
            <DataOrderBook
                stateSelected = {state}
            />
        </div>
    )
}

export default SellBuyOrderTradePage