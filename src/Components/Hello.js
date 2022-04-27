import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function Hello() {
  const [first, setFirst] = useState({
    series: [
      {
        name: " ",
        data: [44, 55, 41, 67, 22, 43 , 44,44, 55],
      },
      {
        name: " ",
        data: [13, 23, 20, 8, 13, 27,23, 8, 13],
      },
    ],
    options: {
      yaxis: {
        show: false,
      },
      xaxis: {
        show: false,
      },
      colors:['#accbea' ,'#9bb6d3'],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
     
     
     
      xaxis: {
        type: "datetime",
        categories: [
          "01/01/2011 GMT",
          "01/02/2011 GMT",
          "01/03/2011 GMT",
          "01/04/2011 GMT",
          "01/05/2011 GMT",
          "01/06/2011 GMT",
          "01/07/2011 GMT",
          "01/08/2011 GMT",
        ],
      },
      // legend: {
      //   position: "right",
      //   offsetY: 40,
      // },
      fill: {
        opacity: 1,
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
            type="bar"
            // height={350}
          />
        </div>
      </div>
    </div>
  );
}
