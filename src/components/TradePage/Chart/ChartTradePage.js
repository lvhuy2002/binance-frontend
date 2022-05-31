import React, {useContext,useState,useEffect} from "react";
import { GlobalContext } from "../../../GlobalState/GlobalContext";
import './Chart.css';
import ChartData from "./ChartData";
import ChartLoading from "./ChartLoading";
const ChartTradePage = () => {
    const GlobalState = useContext(GlobalContext)
    const [dataChart, setDataChart] = useState({})
    
    useEffect(() => {
        const fetching = () => {
            fetch("http://52.140.197.200:8080/market/chart?token1=" + GlobalState.Token1.name + "&token2=" + GlobalState.Token2.name)
            .then(res => res.json())
            .then(post => setDataChart(post))
        }
        
        const id = setInterval(() => {
            fetching();
        }, 2000)  
        return () => clearInterval(id);
    }, [GlobalState]);
    //console.log(dataChart);
    return (
        <div className= "chartTradePage">
            {(dataChart === null) ? <ChartLoading /> : ((typeof dataChart.data === 'undefined') ? <ChartLoading /> : <ChartData dataChart = {dataChart}/>)}
        </div>
    )
}

export default ChartTradePage;