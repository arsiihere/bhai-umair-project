import React from "react";
import { chartThreeOptions } from "../utils/chartsutils";
import ApexChart from "../components/charts/ApexChart";
import { Link } from "react-router-dom";

const CO2Component = () => {
  return (
    <div class="intro-y box mt-5">
      <div
        className="flex justify-evenly gap-10 p-5"
        style={{ justifyContent: "space-evenly" }}
      >
        <span className="flex gap-2 font-bold ">
          <p>View Duration : </p>
          <p>24 Hours</p>
        </span>
        <span className="flex gap-2 font-bold ">
          <p>Set-Point : </p>
          <p>35 C</p>
        </span>
        <spna className="flex gap-2 font-bold ">
          <p>Time : </p>
          <p>6:00 am</p>
        </spna>
      </div>
      <div class="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
        <ApexChart
          width="100%"
          options={chartThreeOptions}
          series={chartThreeOptions.series}
          type={chartThreeOptions.chart.type}
        />
      </div>
    </div>
  );
};

const Nothing = () => "NOTHING TO SHOW NOW";

const items = [
  { name: "CO2", component: <CO2Component /> },
  { name: "Temp", component: <Nothing /> },
  { name: "Humid", component: <Nothing /> },
  { name: "Light", component: <Nothing /> },
  { name: "Devices", component: <Nothing /> },
  { name: "Advance", component: <Nothing /> },
];

function Algorithm() {
  const [currentComponent, setCurrentComponent] = React.useState(
    () => items[0].component
  );
  return (
    <>
      <div
        className="grid w-full gap-4 min-w-full"
        style={{
          minWidth: "230rem",
          gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
        }}
      >
        <div class="intro-y box mt-5  ">
          <div class="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
            {items.map((item, index) => {
              return (
                <Link
                  class="flex flex-col  gap-2 items-center text-primary font-medium"
                  href=""
                  onClick={() => setCurrentComponent(items[index].component)}
                >
                  {" "}
                  <i data-feather="activity" class="w-4 h-4 mr-2"></i>
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div>{currentComponent}</div>
      </div>
    </>
  );
}

export default Algorithm;
