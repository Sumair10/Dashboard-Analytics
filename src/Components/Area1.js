import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function Area1() {
  const [first, setFirst] = useState({
    series: [
      {
        name: "series1",
        data: [80, 110, 70, 100, 40, 120],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
      },
     
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        show: false,
      },
      stroke: {
        show: true,
        curve: "straight",
        // lineCap: 'butt',
        colors: ["#659fd8"],
        width: 2,
        dashArray: 0,
      },
      xaxis :{
        categories: [ 'AUG' , 'SEP','OCT','NOV','DEC', 'JAN'],
      }
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
            width={250}
          />
        </div>
      </div>
    </div>
  );
}
