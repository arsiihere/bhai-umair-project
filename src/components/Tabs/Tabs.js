import React from "react";
import { Box, Tab } from "@mui/material";
import { TabPanel, TabList, TabContext } from "@mui/lab";
// Box, Tab, TabContext, TabList, TabPanel
// const labels = [{name: , component:}]

function Tabs(props) {
  const { value, handleChange, labels, tabSX } = props;
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="Labels">
            {labels.map((label, index) => {
              return <Tab sx={tabSX} label={label.name} value={index} />;
            })}
          </TabList>
        </Box>
        {labels.map((label, index) => {
          return <TabPanel value={index}>{label.component}</TabPanel>;
        })}
      </TabContext>
    </Box>
  );
}

export default Tabs;
