import React from "react";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

const marks = [
  {
    value: 0,
    label: "0 LUX",
  },
  {
    value: 20,
    label: "20 LUX",
  },
  {
    value: 37,
    label: "37 LUX",
  },
  {
    value: 100,
    label: "100 LUX",
  },
];

function Alarams() {
  return (
    <div class="intro-y box mt-5 p-5" style={{ minWidth: "90rem" }}>
      <div class="p-5 border-t border-slate-200/60 font-bold text-lg text-center w-full ">
        <p className="font-bold text-lg"> Alaram Settings for Algorithm </p>
        {/* <Slider
          aria-label="Temperature"
          orientation="vertical"
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          defaultValue={30}
        />
        <Slider
          aria-label="Temperature"
          orientation="vertical"
          defaultValue={30}
          valueLabelDisplay="auto"
          disabled
        /> */}
        <div
          className="flex gap-24 mt-20"
          style={{ height: "20rem", justifyContent: "space-around" }}
        >
          <Slider
            getAriaLabel={() => "Temperature"}
            orientation="vertical"
            getAriaValueText={valuetext}
            defaultValue={[20, 37]}
            valueLabelDisplay="auto"
            marks={marks}
          />
          <Slider
            getAriaLabel={() => "Temperature"}
            orientation="vertical"
            getAriaValueText={valuetext}
            defaultValue={[20, 37]}
            valueLabelDisplay="auto"
            marks={marks}
          />
          <Slider
            getAriaLabel={() => "Temperature"}
            orientation="vertical"
            getAriaValueText={valuetext}
            defaultValue={[20, 37]}
            valueLabelDisplay="auto"
            marks={marks}
          />
          <Slider
            getAriaLabel={() => "Temperature"}
            orientation="vertical"
            getAriaValueText={valuetext}
            defaultValue={[20, 37]}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </div>
        <div
          className="flex gap-24 mt-20"
          style={{ height: "20rem", justifyContent: "space-around" }}
        >
          <Slider
            getAriaLabel={() => "Temperature"}
            orientation="vertical"
            getAriaValueText={valuetext}
            defaultValue={[20, 37]}
            valueLabelDisplay="auto"
            marks={marks}
          />
          <Slider
            getAriaLabel={() => "Temperature"}
            orientation="vertical"
            getAriaValueText={valuetext}
            defaultValue={[20, 37]}
            valueLabelDisplay="auto"
            marks={marks}
          />
          <Slider
            getAriaLabel={() => "Temperature"}
            orientation="vertical"
            getAriaValueText={valuetext}
            defaultValue={[20, 37]}
            valueLabelDisplay="auto"
            marks={marks}
          />
          <Slider
            getAriaLabel={() => "Temperature"}
            orientation="vertical"
            getAriaValueText={valuetext}
            defaultValue={[20, 37]}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </div>
        {/* <div className="flex" style={{ minWidth: "50rem" }}>
        
        </div> */}
      </div>
    </div>
  );
}

export default Alarams;
