

// import ApexCharts from "apexcharts";
// import React from "react";
// import { useState } from "react";

// const Curve = () => {
//   const [series, setSeries] = useState({
//     series: [44, 55, 67, 83],
//     options: {
//       chart: {
//         height: 350,
//         type: "radialBar",
//       },
//       plotOptions: {
//         radialBar: {
//           dataLabels: {
//             name: {
//               fontSize: "22px",
//             },
//             value: {
//               fontSize: "16px",
//             },
//             total: {
//               show: true,
//               label: "Total",
//               formatter: function (w) {
//                 // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
//                 return 249;
//               },
//             },
//           },
//         },
//       },
//       labels: ["Apples", "Oranges", "Bananas", "Berries"],
//     },
//   });

//   return (
//     <div>
//       <div class="chart-wrap">
//         <div id="chart">
//           <ApexCharts
//             options={series.options}
//             series={series}
//             type="donut"
//             width={380}
//           />
//         </div>
//       </div>

//       <div class="actions"></div>
//     </div>
//   );
// };

// export default Curve();
