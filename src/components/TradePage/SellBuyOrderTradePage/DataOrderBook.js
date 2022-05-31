import React, {useState, useEffect} from 'react'
import "./SellBuyOrderTradePage.css"

const DataOrderBook = (props) => {
    
    var buyDataCopy = props.buyData;
    var buyDataSplit = buyDataCopy.slice(0,17);
    var sellDataCopy = props.sellData;
    var sellDataSplit = sellDataCopy.slice(0,17);
    //console.log(props.buyData)
    console.log(props.MarketSl);
    if (props.stateSelected === 'SellOrder'){
        return (
            <div>
                <div className='SellOrder'>
                    {
                        props.sellData.map((Data, key) => {
                            return (
                                <div className='DataOrderBook'>
                                    <h6 className='LeftSellDataOrderBook'>{Data.price.toLocaleString('en-US',{ minimumFractionDigits: 2 })}</h6>
                                    <h6 className='RightDataOrderBook'>{Data.remainamount.toLocaleString('en-US',{ minimumFractionDigits: 2 })}</h6>
                                    <h6 className='RightDataOrderBook'>{(Data.price * Data.remainamount).toLocaleString('en-US',{ minimumFractionDigits: 2 })}</h6>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='AVGSellOrder'>
                    <h3 className={props.MarketSl.state === 'INC'? 'AVGINC' : 'AVGDEC'} style={{width: '120px'}}>{props.MarketSl.lastprice.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h3>
                </div>
            </div>
        )
    }
    if (props.stateSelected === 'BuyOrder'){
        return (
            <div>
                <div className='AVGBuyOrder'>
                    <h3 className={props.MarketSl.state === 'INC'? 'AVGINC' : 'AVGDEC'} style={{width: '120px'}}>{props.MarketSl.lastprice.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h3>
                </div>
                <div className='BuyOrder'>
                    {
                        props.buyData.map((Data, key) => {
                            return (
                                <div className='DataOrderBook'>
                                    <h6 className='LeftBuyDataOrderBook'>{Data.price.toLocaleString('en-US',{ minimumFractionDigits: 2 })}</h6>
                                    <h6 className='RightDataOrderBook'>{Data.remainamount.toLocaleString('en-US',{ minimumFractionDigits: 2 })}</h6>
                                    <h6 className='RightDataOrderBook'>{(Data.price * Data.remainamount).toLocaleString('en-US',{ minimumFractionDigits: 2 })}</h6>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className='SellOrderBook'>
                {
                    sellDataSplit.map((Data, key) => {
                        return (
                            <div className='DataOrderBook'>
                                <h6 className='LeftSellDataOrderBook'>{Data.price.toLocaleString('en-US',{ minimumFractionDigits: 2 })}</h6>
                                <h6 className='RightDataOrderBook'>{Data.remainamount.toLocaleString('en-US',{ minimumFractionDigits: 2 })}</h6>
                                <h6 className='RightDataOrderBook'>{(Data.price * Data.remainamount).toLocaleString('en-US',{ minimumFractionDigits: 2 })}</h6>
                            </div>
                        )
                    })
                }
            </div>
            <div className='MidOrderBook'>
                <h3 className={(typeof(props.MarketSl) !== "undefined") ? (props.MarketSl.state === 'INC'? 'AVGINC' : 'AVGDEC') : 'AVGINC'} style={{width: '120px'}}>{(typeof(props.MarketSl) === "undefined") ? '00000' : props.MarketSl.lastprice.toLocaleString('en-US',{ minimumFractionDigits: 6 })}</h3>
            </div>
            <div className='BuyOrderBook'>
                {
                    buyDataSplit.map((Data, key) => {
                        return (
                            <div className='DataOrderBook'>
                                <h6 className='LeftBuyDataOrderBook'>{Data.price.toLocaleString('en-US',{ minimumFractionDigits: 2 })}</h6>
                                <h6 className='RightDataOrderBook'>{Data.remainamount.toLocaleString('en-US',{ minimumFractionDigits: 2 })}</h6>
                                <h6 className='RightDataOrderBook'>{(Data.price * Data.remainamount).toLocaleString('en-US',{ minimumFractionDigits: 2 })}</h6>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DataOrderBook