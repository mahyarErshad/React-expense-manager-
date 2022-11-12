import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
  let barFieldHeight = "0%";
  if (props.max > 0) {
    barFieldHeight = Math.round((props.value / props.max) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFieldHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
