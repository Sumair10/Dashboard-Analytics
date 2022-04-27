import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function Doughnut() {
  const [first, setFirst] = useState({
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ["A", "B", "C", "D", "E"],
  });

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={first.options}
            series={first.series}
            type="donut" 
            width="500"
          />
        </div>
      </div>
    </div>
  );
}
