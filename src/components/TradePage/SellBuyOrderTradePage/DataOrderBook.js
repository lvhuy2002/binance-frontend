import React, {useState, useEffect} from 'react'
import "./SellBuyOrderTradePage.css"

var SellData = [
    {price: 0.12313112, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999}
];

var BuyData = [
    {price: 0.12313112, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999},
    {price: 0.12313111, Amount: 999999999999, Total: 999999999999}
]

const DataOrderBook = (props) => {
    const [DataSellOrder,SetDataSellOrder] = useState([]);
    //const [DataBuy]
    if (props.stateSelected === 'SellOrder'){
        return (
            <div>
                
            </div>
        )
    }
    if (props.stateSelected === 'BuyOrder'){
        return (
            <div>
            </div>
        )
    }
    return (
        <div>
            <div className='SellOrderBook'>
                {
                    SellData.map((Data, key) => {
                        return (
                            <div className='DataOrderBook'>
                                <h6 className='LeftSellDataOrderBook'>{Data.price}</h6>
                                <h6 className='RightDataOrderBook'>{Data.Amount}</h6>
                                <h6 className='RightDataOrderBook'>{Data.Total}</h6>
                            </div>
                        )
                    })
                }
            </div>
            <div className='MidOrderBook'>
                <h3 style={{color: 'white', width: '120px'}}>0.00002580</h3>
                <h6 style={{color: '#848e9c'}}>$0.000001</h6>
            </div>
            <div className='BuyOrderBook'>
                {
                    BuyData.map((Data, key) => {
                        return (
                            <div className='DataOrderBook'>
                                <h6 className='LeftBuyDataOrderBook'>{Data.price}</h6>
                                <h6 className='RightDataOrderBook'>{Data.Amount}</h6>
                                <h6 className='RightDataOrderBook'>{Data.Total}</h6>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DataOrderBook