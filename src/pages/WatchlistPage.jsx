import React, { useState,useEffect } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '../components/Dashboard/Grid';
import Header from '../components/Common/Header';
import List from '../components/Dashboard/List';
import { Link } from 'react-router-dom';

export default function LabTabs() {
  const [value, setValue] = useState("grid");
  const [watchlist, setWatchlist] = useState([]);

  useEffect(()=>{
    const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(storedWatchlist);
  },[]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    fontWeight: 600,
    fontSize: "1.2rem",
    fontFamily: "Inter",
    textTransform: "Capitalize",
  }

  return (
    <div>
      <Header/>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style}/>
            <Tab label="List" value="list" sx={style}/>
          </TabList>
        </div>
        <TabPanel value="grid">
        <div className="grid-flex">
            {watchlist.length === 0 ? (
              <div className="not-found">
                <div className="item-not-found">No Items in the Watchlist</div>
                <Link to="/dashboard"><button>Dashboard</button></Link>
              </div>
            ) : (
              watchlist.map((coin, i) => <Grid key={i} coin={coin} />)
            )}
          </div>
        </TabPanel>
        <TabPanel value="list">
        <table className="list-table">
            {watchlist.length === 0 ? (
              <div className="not-found">
                <div className="item-not-found">No Items in the Watchlist</div>
                <Link to="/dashboard"><button>Dashboard</button></Link>
              </div>
            ) : (
              watchlist.map((coin, i) => <List key={i} coin={coin} />)
            )}
          </table>
        </TabPanel>
      </TabContext>
    </div>
  );
}

