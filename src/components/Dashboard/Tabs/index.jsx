import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "../Grid";
import List from "../List";
import "./styles.css";

export default function TabsComponent({ coins, clearSearch }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    fontWeight: 600,
    fontSize: "1.2rem",
    fontFamily: "Inter",
    textTransform: "Capitalize",
  };

  return (
    <div>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>
        </div>
        <TabPanel value="grid">
          <div className="grid-flex">
            {coins.length === 0 ? (
              <div className="not-found">
                <div className="item-not-found">No Crypto Currencies Found</div>
                <button onClick={clearSearch}>Clear Search</button>
              </div>
            ) : (
              coins.map((coin, i) => <Grid key={i} coin={coin} />)
            )}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className="list-table">
            {coins.length === 0 ? (
              <div className="not-found">
                <div className="item-not-found">No Crypto Currencies Found</div>
                <button onClick={clearSearch}>Clear Search</button>
              </div>
            ) : (
              coins.map((coin, i) => <List key={i} coin={coin} />)
            )}
          </table>
        </TabPanel>
      </TabContext>
    </div>
  );
}
