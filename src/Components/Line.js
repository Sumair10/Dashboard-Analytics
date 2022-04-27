import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function Line() {
  const [first, setFirst] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        show: false,
      },
      yaxis: {
        show: false,
      },
      stroke : {
        curve : 'smooth'
      },
      colors: ['#477cb2', '#aeccea']
    },
    series: [
      {
        name: "DAY TIME",
        data: [20, 55],
      },
      {
        name: "NIGHT TIME",
        data: [25, 50],
      },
    ],
    
  });

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={first.options}
            series={first.series}
            type="line"
            max-width="500"
          />
        </div>
      </div>
    </div>
  );
}
