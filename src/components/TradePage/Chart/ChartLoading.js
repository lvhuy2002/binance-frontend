import React, {useState} from "react";
import './Chart.css';
import Chart from "react-apexcharts";

const ChartLoading = () => {
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
    const series = [{ data: seriesData }];
    return (
        <div id="chart">
            <Chart options={options} series={series} type="candlestick" height={550} />
        </div>
    )
}

export default ChartLoading;