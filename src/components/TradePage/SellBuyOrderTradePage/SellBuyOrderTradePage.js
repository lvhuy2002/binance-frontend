import React, {useState, useEffect, useContext} from 'react'
import "./SellBuyOrderTradePage.css"
import DataOrderBook from './DataOrderBook';
import { GlobalContext} from '../../../GlobalState/GlobalContext';
function SellBuyOrderTradePage(props) {
    const GlobalState = useContext(GlobalContext);
    const [state, setState] = useState('OrderBook');
    const [buyData, setBuyData] = useState([]);
    const [sellData, setSellData] = useState([]);
    useEffect(() => {
        const fetching = () => {
            fetch('http://52.140.197.200:8080/market/buy/?token1=' + GlobalState.Token2.name + '&token2=' + GlobalState.Token1.name)
                .then(res => res.json())
                .then(post => setBuyData(post))
            fetch('http://52.140.197.200:8080/market/sell/?token1=' + GlobalState.Token2.name + '&token2=' + GlobalState.Token1.name)
                .then(res => res.json())
                .then(post => setSellData(post))
        }        
        const id = setInterval(() => {
            fetching();
        }, 2000)  
        return () => clearInterval(id);
    }, [GlobalState]);
    var MarketSl;

    for(var Market of props.DataAllMarket) {
        if (Market.token1 === GlobalState.Token1.name && Market.token2 === GlobalState.Token2.name)
        {
            MarketSl = Market;
        }
    }
    
    buyData.sort(function(dt1, dt2) {return dt2.price - dt1.price})
    sellData.sort(function(dt1, dt2) {return dt1.price - dt2.price})
    //console.log(buyData);
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
                <h6 className='TitleLeftDataOrderBook'>Price({GlobalState.Token2.symbol.toUpperCase()})</h6>
                <h6 className='TitleRightDataOrderBook'>Amount({GlobalState.Token1.symbol.toUpperCase()})</h6>
                <h6 className='TitleRightDataOrderBook'>Total</h6>
            </div>
            <DataOrderBook
                stateSelected = {state}
                buyData = {buyData}
                sellData = {sellData}
                MarketSl = {MarketSl}
            />
        </div>
    )
}

export default SellBuyOrderTradePage