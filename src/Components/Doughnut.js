import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function Doughnut() {
  const [first, setFirst] = useState({
    options: {
      colors: ['#f8e268', '#e08197', '#8abd6e', '#92ccce', '#7ababc']
      

    },
    series: [10, 24, 35, 17, 14],
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
            max-width="300"
            max-height="300"
          />
        </div>
      </div>
    </div>
  );
}
