import React , {useContext} from 'react'
import { GlobalContext } from '../../../GlobalState/GlobalContext'
function MarketTradesData(props) {
    var historyCopy = props.history
    var historySplit = historyCopy.slice(0,50);
    return (
        <div className='historyData'>
            {
                historySplit.map(data => {
                    return (
                        <div className='historyDataComp'>
                            <h6 className='historyAmount'>{data.amount.toLocaleString('en-US',{ minimumFractionDigits: 2 })}</h6>
                            <h6 className='historyOrderDate'>{data.orderedat.slice(0,10) + " " + data.orderedat.slice(11,19)}</h6>
                        </div>
                    )
                })     
            }
        </div>
    )
}

export default MarketTradesData