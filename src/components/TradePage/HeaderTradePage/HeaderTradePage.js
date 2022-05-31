import React, {useContext,useState,useEffect} from 'react'
import "./HeaderTradePage.css"
import { Navigate } from 'react-router-dom';
import { GlobalContext } from '../../../GlobalState/GlobalContext';

function HeaderTradePage(props) {
    const GlobalState = useContext(GlobalContext)
    var check = false;
    var MarketSl;

    for(var Market of props.DataAllMarket) {
        
        if (('/trade/' + Market.MarketSymbolLink.toUpperCase()) === props.URL) {
            check = true;
            MarketSl = Market;
        }
    }
    
    useEffect(() => {
        if (check === true) {
            GlobalState.SetToken1({name: MarketSl.token1, symbol: MarketSl.token1Symbol})
            GlobalState.SetToken2({name: MarketSl.token2, symbol: MarketSl.token2Symbol})
        }
    },[])
    if (check === false) {
        return(
            <Navigate to='/'/>
        )
        
    }
    return (
        <div>
            <div className='HeaderTrade'>
                <div className='MarketInformation'>
                    <h3 className='MarketName'>{GlobalState.Token1.symbol.toUpperCase()}/{GlobalState.Token2.symbol.toUpperCase()}</h3>
                    <div className='priceToken'>
                        <h5 style = {{marginBottom: 2}} 
                            className = {MarketSl.state ==="INC" ? "Inc" : "Dec"}>{MarketSl.lastprice.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h5>
                        <h6>${MarketSl.lastprice.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h6>
                    </div>
                </div>
                <div className='InformationTotal'>
                    <div className='Change24h'>
                        <h6 className='title'>24h High</h6>            
                        <h6>{MarketSl.high.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h6>                      
                    </div>
                    <div className='Change24h'>
                        <h6 className='title'>24h Low</h6>
                        <h6>{MarketSl.low.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h6> 
                    </div>
                    <div className='Change24h'>                       
                        <h6 className='title'>24h Volume</h6>
                        <h6>{MarketSl.volume.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h6>                 
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default HeaderTradePage