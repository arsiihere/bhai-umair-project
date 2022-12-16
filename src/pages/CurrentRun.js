// import React, { useState } from "react";
// import { Tabs, Card } from "../components";
// import { Box, Grid } from "@mui/material";
import ApexChart from "../components/charts/ApexChart";
import {
  chartOneOptions,
  chartTwoOptions,
  chartThreeOptions,
  chartFourOptions,
} from "../utils/chartsutils";

// function Content() {
//   const response = [
//     {
//       name: "TEMP",
//       lists: [
//         { key: "Set", value: "25 C" },
//         { key: "Current", value: "24 C" },
//         { key: "Max", value: "20 C" },
//         { key: "Min", value: "21 C" },
//       ],
//     },
//     {
//       name: "HUDMITY",
//       lists: [
//         { key: "Set", value: "85%" },
//         { key: "Current", value: "85%" },
//         { key: "Max", value: "86%" },
//         { key: "Min", value: "85%" },
//       ],
//     },
//     {
//       name: "LIGHT",
//       lists: [{ key: "OFF", value: "18:00 12/03" }],
//     },
//     {
//       name: "Co2",
//       lists: [
//         { key: "Set", value: "4000" },
//         { key: "Current", value: "3800" },
//         { key: "Max", value: "4200" },
//         { key: "Min", value: "3500" },
//       ],
//     },
//   ];
//   return (
//     <Box sx={{ display: "flex", justifyContent: "space-around" }}>
//       <Box sx={{ maxWidth: "40%" }}>
//         <Grid container gap={1}>
//           {response.map((res) => {
//             return (
//               <Grid item xs={4} md={4} lg={4}>
//                 <Card properties={res} />;
//               </Grid>
//             );
//           })}
//         </Grid>
//       </Box>
//       <Box sx={{ maxWidth: "60%" }}>
//         <ApexChart
//           width="150%"
//           options={chartOneOptions}
//           series={chartOneOptions.series}
//           type={chartOneOptions.chart.type}
//         />
//         <ApexChart
//           width="100%"
//           options={chartTwoOptions}
//           series={chartTwoOptions.series}
//           type={chartTwoOptions.chart.type}
//         />
//         <ApexChart
//           width="100%"
//           options={chartThreeOptions}
//           series={chartThreeOptions.series}
//           type={chartThreeOptions.chart.type}
//         />
//       </Box>
//     </Box>
//   );
// }

// function CurrentRun() {
//   const labels = [
//     { name: "Overview", component: <Content /> },
//     { name: "Device Manager", component: "" },
//   ];
//   const [value, setValue] = useState(0);
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return <Tabs value={value} handleChange={handleChange} labels={labels} />;
// }

// export default CurrentRun;

import React from "react";

const response = [
  {
    name: "TEMP",
    lists: [
      { key: "Set", value: "25 C" },
      { key: "Current", value: "24 C" },
      { key: "Max", value: "20 C" },
      { key: "Min", value: "21 C" },
    ],
  },
  {
    name: "HUDMITY",
    lists: [
      { key: "Set", value: "85%" },
      { key: "Current", value: "85%" },
      { key: "Max", value: "86%" },
      { key: "Min", value: "85%" },
    ],
  },

  {
    name: "Co2",
    lists: [
      { key: "Set", value: "4000" },
      { key: "Current", value: "3800" },
      { key: "Max", value: "4200" },
      { key: "Min", value: "3500" },
    ],
  },
  {
    name: "LIGHT",
    lists: [{ key: "OFF", value: "18:00 12/03" }],
  },
];

function CurrentRun() {
  return (
    <div className="flex gap-4">
      <div>
        {response.map((item) => {
          return (
            <div class="intro-y box mt-5 p-5" style={{ minWidth: "20rem" }}>
              <div class="p-5 border-t border-slate-200/60 font-bold text-lg text-center w-full ">
                {item.name}
              </div>
              {item.lists.map((list) => {
                return (
                  <div className="flex gap-4 justify-center w-full p-1">
                    <p>{list.key}</p>
                    <p>{list.value}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="pt-4" style={{ minWidth: "70rem" }}>
        <ApexChart
          width="50%"
          options={chartOneOptions}
          series={chartOneOptions.series}
          type={chartOneOptions.chart.type}
        />
        <ApexChart
          width="50%"
          options={chartTwoOptions}
          series={chartTwoOptions.series}
          type={chartTwoOptions.chart.type}
        />
        <ApexChart
          width="50%"
          options={chartThreeOptions}
          series={chartThreeOptions.series}
          type={chartThreeOptions.chart.type}
        />
      </div>
    </div>
  );
}

export default CurrentRun;
