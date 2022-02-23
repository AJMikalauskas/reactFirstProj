import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';


const Chart = (props) => {
const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
console.log(dataPointValues)
let dataPointTotal = 0;
for(const dataPointV of dataPointValues)
{
    dataPointTotal += dataPointV;
}
console.log(dataPointTotal);
// const totalMaximum = Math.max(...dataPointValues) // Max method expects a list back, so when it receives only the array, there will have to be the (...)
    // This is so it only pulls the numbers from the array and finds Max
    console.log(dataPointTotal);

    return (
      <div className="chart">
        {props.dataPoints.map((dataPoint) => (
          <ChartBar
            key = {dataPoint.label}
            value = {dataPoint.value}
            maxValue={dataPointTotal}
            label={dataPoint.label}
          />
        ))}
      </div>
    );
}

export default Chart;