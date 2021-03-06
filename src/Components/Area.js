import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function Area() {
  const [first, setFirst] = useState({
    series: [
      {
        // name: "series1",
        data: [0, 40, 28, 51],
      },
      {
        // name: "series2",
        data: [10, 32, 45, 32],
      },
      {
        // name: "series2",
        data: [15, 52, 41, 11],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: "straight",
        width: 2,
        dashArray: 0,
      },

      xaxis: {
        show: false,
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={first.options}
            series={first.series}
            type="area"
            max-width="500"
          />
        </div>
      </div>
    </div>
  );
}
