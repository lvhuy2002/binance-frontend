import React, {useContext,useState,useEffect} from "react";
import { GlobalContext } from "../../../GlobalState/GlobalContext";
import './Chart.css';
import Chart from "react-apexcharts";

const ChartData = (props) => {
    const [options, setObject] = useState({
        chart: {
            type: 'candlestick',
            height: 350
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    })
    const seriesData = []
    props.dataChart.data.map(mk => {
        seriesData.push(
            {
                x: new Date(mk.time),
                y: [mk.open, mk.high, mk.low, mk.close]
            }
        )
    })
    const series = [{ data: seriesData }];
    return (
        <div id="chart">
            <Chart options={options} series={series} type="candlestick" height={550} />
        </div>
    )
}

export default ChartData;