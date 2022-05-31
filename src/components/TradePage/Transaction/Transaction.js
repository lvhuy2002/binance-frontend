import React, {useContext, useState} from 'react'
import './Transaction.css'
import { GlobalContext } from '../../../GlobalState/GlobalContext'
import { Link } from 'react-router-dom';
function Transaction() {
    const GlobalState = useContext(GlobalContext);
    const [buyPrice,setBuyPrice] = useState();
    const [buyAmount,setBuyAmount] = useState();
    const [sellPrice,setSellPrice] = useState();
    const [sellAmount,setSellAmount] = useState();
    const [save, setSave] = useState();
    const CreateOrder = (data) => {
        fetch('http://52.140.197.200:8080/order/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(post => setSave(post))
            .catch(err => alert(err))
    }
    const handleClickBuy = () => {
        if (buyAmount !== '' && buyPrice !== '') {
            CreateOrder({username: GlobalState.user, token1: GlobalState.Token1.name, token2: GlobalState.Token2.name, 
            orderaction: "BUY", totalamount: parseFloat(buyAmount), price: parseFloat(buyPrice)})
        }
        console.log(save);
    }
    const handleClickSell = () => {
        if (sellAmount !== '' && sellPrice !== '') {
            CreateOrder({username: GlobalState.user, token1: GlobalState.Token1.name, token2: GlobalState.Token2.name, 
            orderaction: "SELL", totalamount: parseFloat(sellAmount), price: parseFloat(sellPrice)})
        }
    }
    return (
        <div className='Transaction'>
            <div className= 'TransactionComp'>
                <div className='HeaderTransaction'>
                    <h6 className='avbl'>Avbl</h6>
                    <h6 className='symbolTranHead'>- {GlobalState.Token1.symbol.toUpperCase()}</h6>
                </div>
                
                <div className='inputPriceBlock'>
                    <h5 className='priceTran'>Price</h5>
                    <input type="number" className='inputPrice' onChange={e => {setBuyPrice(e.target.value)}}/>
                    <h5 className='symbolTranP'>{GlobalState.Token2.symbol.toUpperCase()}</h5>
                </div>
                
                <div className='inputAmountBlock'>
                    <h5 className='amountTran'>Amount</h5>
                    <input type="number" className='inputAmount' onChange={e => {setBuyAmount(e.target.value)}}/>
                    <h5 className='symbolTranA'>{GlobalState.Token1.symbol.toUpperCase()}</h5>
                </div>
                {GlobalState.checkLogin === true ? 
                  <div className='BuyButton' onClick={() => handleClickBuy()}>
                      <h5 style={{marginLeft: '150px'}}>Buy</h5>
                  </div> :
                  <div className='LoginRequestButton'>
                      <Link to = {'/login'} className = 'Link'>
                          <h5 style={{color: 'orange', marginLeft: '100px', marginRight: '3px'}}>Log In</h5>
                      </Link>
                      <h5 style={{color: 'white'}}>or</h5>
                      <Link to = {'/register'} className = 'Link'>
                          <h5 style={{color: 'orange', marginLeft: '3px'}}>Register Now</h5>
                      </Link>
                      
                  </div>
                }
            </div>
            <div className= 'TransactionComp'>
                <div className='HeaderTransaction'>
                    <h6 className='avbl'>Avbl</h6>
                    <h6 className='symbolTranHead'>- {GlobalState.Token2.symbol.toUpperCase()}</h6>
                </div>
                
                <div className='inputPriceBlock'>
                    <h5 className='priceTran'>Price</h5>
                    <input type="number" className='inputPrice' onChange={e => {setSellPrice(e.target.value)}}/>
                    <h5 className='symbolTranP'>{GlobalState.Token2.symbol.toUpperCase()}</h5>
                </div>
                
                <div className='inputAmountBlock'>
                    <h5 className='amountTran'>Amount</h5>
                    <input type="number" className='inputAmount' onChange={e => {setSellAmount(e.target.value)}}/>
                    <h5 className='symbolTranA'>{GlobalState.Token1.symbol.toUpperCase()}</h5>
                </div>
                {GlobalState.checkLogin === true ? 
                  <div className='SellButton' onClick={() => handleClickSell()}>
                      <h5 style={{marginLeft: '150px'} } >Sell</h5>
                  </div> :
                  <div className='LoginRequestButton'>
                      <Link to = {'/login'} className = 'Link'>
                          <h5 style={{color: 'orange', marginLeft: '100px', marginRight: '3px'}}>Log In</h5>
                      </Link>
                      <h5 style={{color: 'white'}}>or</h5>
                      <Link to = {'/register'} className = 'Link'>
                          <h5 style={{color: 'orange', marginLeft: '3px'}}>Register Now</h5>
                      </Link>
                      
                  </div>
                }
            </div>
        </div>
    )
}

export default Transaction