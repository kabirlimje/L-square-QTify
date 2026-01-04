import React, {useState, useEffect} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Carousel from "../Carousel/Carousel.jsx";

export default function ColorTabs({ tabData = [], songsData }) {
  const allTabs = [{label: "All", key: "all"}, ...tabData];
  const [value, setValue] = useState("all");

  const filteredData = value === "all" ? songsData : songsData.filter(song => song.genre?.key === value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
          textColor="primary"
          sx={{
            "& .MuiTab-root": {
              color: "white",
            },
            "& .Mui-selected": {
              color: "white",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#34C94B",
            },
          }}
        >
          
          {allTabs.map(tab => (
              <Tab value={`${tab.key}`} label={`${tab.label}`} key={tab.key} />
          ))}
        </Tabs>
      </Box>

      <Carousel data={filteredData} type="songs" />

    </>
  );
}
