import React,{useState} from 'react'
import "./MarketListTradePage.css"
import MarketData from './MarketData'

function MarketListTradePage() {
    const [stateMarket, setStateMarket] = useState('BTC')
    const [stateChange, setStateChange] = useState('Change')
    return (
        <div className='MarketListTradePage'>
            <div className='TitleMarketListTradePage'>
                <input type='text' name='search' placeholder='Search' className='searchMarket'></input>
                <div className='ListMarket'>
                    <h6 className={stateMarket === 'BTC' ? 'MarketS' : 'MarketUS'} onClick= {() => setStateMarket('BTC')}>BTC</h6>
                    <h6 className={stateMarket === 'ETH' ? 'MarketS' : 'MarketUS'} onClick= {() => setStateMarket('ETH')}>ETH</h6>
                    <h6 className={stateMarket === 'USDT' ? 'MarketS' : 'MarketUS'} onClick= {() => setStateMarket('USDT')}>USDT</h6>
                    <h6 className={stateMarket === 'BNB' ? 'MarketS' : 'MarketUS'} onClick= {() => setStateMarket('BNB')}>BNB</h6>
                    <h6 className={stateMarket === 'USDC' ? 'MarketS' : 'MarketUS'} onClick= {() => setStateMarket('USDC')}>USDC</h6>
                </div>
                <div className='TitleMarketListData'>
                    <h6 className='PairMarket'>Pair</h6>
                    <h6 className='PriceMarket'>Price</h6>
                    <h6 className= 'ChangeVolumeMarket'>{stateChange === 'Change' ? 'Change' : 'Volume'}</h6>
                    <div className='ChangeIcon' onClick={() => {stateChange === 'Change' ? setStateChange('Volume') : setStateChange('Change')}}>
                    </div>
                </div>
            </div>
            <MarketData
                stateChange = {stateChange}
                stateMarket = {stateMarket}
            />
        </div>
    )
}
    
export default MarketListTradePage