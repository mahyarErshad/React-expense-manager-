import React from 'react'
import "./Chart.css"
import ChartBar from "../ChartBar/ChartBar"

function Chart(props) {
  return (
    <div className='chart'>
        {props.dataPoints.map((dataPoint)=>{
            <ChartBar />
        })}
    </div>
  )
}

export default Chart