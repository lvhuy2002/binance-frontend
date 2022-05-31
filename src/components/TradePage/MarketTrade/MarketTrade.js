import React, {useState, useContext, useEffect} from 'react'
import "./MarketTrade.css"
import MarketTradesData from './MarketTradesData'
import { GlobalContext } from '../../../GlobalState/GlobalContext'
function MarketTrade() {
    const [MarketOrMyTrades,SetMarketOrMyTrades] = useState('MarketTrades')
    const GlobalState = useContext(GlobalContext);
    const [history, SetHistory] = useState([]);
    
    useEffect(() => {
        fetch('http://52.140.197.200:8080/market/history/?token1=' + GlobalState.Token1.name + '&token2=' + GlobalState.Token2.name)
            .then(res => res.json())
            .then(pos => SetHistory(pos))
            .catch(err => console.log(err))
    }, [GlobalState]);
    if (typeof(history) === "undefined" || typeof(history.detail) !== "undefined") {
        return (<div><h1>Loading</h1></div>)
    }
    return (
        <div className='MarketTrade'>
            <div className='MarketOrMyTrades'>
                <h5 style={{marginRight: '20px'}} className={MarketOrMyTrades === 'MarketTrades' ? 'SOption' : 'USOption'}
                onClick = {() => SetMarketOrMyTrades('MarketTrades')}>
                Market Trades
                </h5>
                
            </div>
            {MarketOrMyTrades === 'MarketTrades' ? 
                <div>
                    <div className='TitleMarketTrades'>
                        <h6 className='LeftTitle1'>Amount</h6>
                        <h6 className='RightTitle1'>Time</h6>    
                    </div>
                    <div>
                        <MarketTradesData history = {history}/>
                    </div>         
                </div> :
                <div>
                    
                </div>
            }
        </div>
    )
}

export default MarketTrade