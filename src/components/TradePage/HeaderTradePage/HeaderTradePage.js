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
    //console.log(MarketSl)
    useEffect( () => {
        if (check === true) {
            GlobalState.SetToken1({name: MarketSl.token1, symbol: MarketSl.token1Symbol})
            GlobalState.SetToken2({name: MarketSl.token2, symbol: MarketSl.token2Symbol})
        }
    },[])
    
    if (check === false) {
        
    }
    return (
        <div>
            <div className='HeaderTrade'>
                <div className='MarketInformation'>
                    <h3 className='MarketName'>{MarketSl.MarketSymbol.toUpperCase()}</h3>
                    <div className='priceToken'>
                        <h5 style = {{marginBottom: 2}}>0.00000000</h5>
                        <h6>$0.000000</h6>
                    </div>
                </div>
                <div className='InformationTotal'>
                    <div className='Change24h'>
                        <h6 className='title'>24h Change</h6>
                        <div style={{display: 'flex',flexDirection: 'row'}}>
                            <h6>0.00000000</h6>
                            <h6 style={{marginLeft: 2}}>+0.00%</h6>
                        </div>
                    </div>
                    <div className='Change24h'>
                        <h6 className='title'>24h High</h6>            
                        <h6>0.00000000</h6>                      
                    </div>
                    <div className='Change24h'>
                        <h6 className='title'>24h Low</h6>
                        <h6>0.00000000</h6> 
                    </div>
                    <div className='Change24h'>
                        <h6 className='title'>24h Volume(SHIB)</h6>                       
                        <h6>000000000000000</h6>                         
                    </div>
                    <div className='Change24h'>                       
                        <h6 className='title'>24h Volume(USDT)</h6>
                        <h6>000000000000000</h6>                 
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default HeaderTradePage