import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
  let barFieldHeight = "0%";
  const heightPercentage = Math.round((props.value / props.maxValue) * 100);
  if (props.maxValue > 0) {
    barFieldHeight = heightPercentage + "%";
  }
  let backgroundColor;
  if (heightPercentage < 30) {
    backgroundColor = "#248632";
  } else if (heightPercentage >= 30 && heightPercentage < 50) {
    backgroundColor = "#ffc007";
  } else if (heightPercentage >= 50 && heightPercentage < 80) {
    backgroundColor = "#f1601f";
  } else {
    backgroundColor = "#dc3544";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFieldHeight, backgroundColor }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
