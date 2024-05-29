import React, { useEffect, useState } from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import "./styles.css";
import { Tooltip } from "@mui/material";
import { convertNumbers } from "../../../functions/convertNumbers";
import { Link } from "react-router-dom";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";


function List({ coin }) {
  const [clicked, setClicked] = useState(false);

  useEffect(()=>{
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    if(watchlist.some((item) => item.id === coin.id)){
      setClicked(true);
    }
  },[coin.id]);

  const handleClicked = () => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    if(clicked){
      const newWatchlist = watchlist.filter((item) => item.id !== coin.id);
      localStorage.setItem("watchlist",JSON.stringify(newWatchlist));
    }else{
      watchlist.push(coin);
      localStorage.setItem("watchlist",JSON.stringify(watchlist));
    }
    setClicked(!clicked);
  };

  return (
   <Link to={`/coin/${coin.id}`}>
    <tr className="list-row">
      <Tooltip title="Coin Logo" placement="bottom-start">
        <td className="td-image col">
          <img src={coin.image} className="coin-logo" />
        </td>
      </Tooltip>
      <Tooltip title="Coin Info" placement="bottom-start">
        <td className="col">
          <div className="name-info">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </td>
      </Tooltip>
      <Tooltip title="Price changes in 24Hrs" placement="bottom-start">
        {coin.price_change_percentage_24h > 0 ? (
          <td className="chip-flex col">
            <div className="chip-price">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip td-icon">
              <TrendingUpRoundedIcon />
            </div>
          </td>
        ) : (
          <td className="chip-flex col">
            <div className="chip-price chip-red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip chip-red td-icon">
              <TrendingDownRoundedIcon />
            </div>
          </td>
        )}
      </Tooltip>
      <Tooltip title="Current Price">
        <td className="col">
          <h3
            className="coin-price td-center-align"
            style={{
              color:
                coin.price_change_percentage_24h > 0
                  ? "var(--green)"
                  : "var(--red)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
        </td>
      </Tooltip>
      <Tooltip title="Total Volume" placement="bottom-end">
        <td className="td-mbl-vol col">
          <p className="total-volume td-right-align td-total-volume">
            ${coin.total_volume.toLocaleString()}
          </p>
        </td>
      </Tooltip>
      <Tooltip title="Market Cap" placement="bottom-end">
        <td className="desktop-td-mkt col">
          <p className="total-volume td-right-align ">
            ${coin.market_cap.toLocaleString()}
          </p>
        </td>
      </Tooltip>
      <Tooltip title="Market Cap" placement="bottom-end">
        <td className="mobile-td-mkt col">
          <p className="total-volume td-right-align ">
            ${convertNumbers(coin.market_cap)}
          </p>
        </td>
      </Tooltip>
      <Tooltip title="watchlist" placement="bottom-end">
        <td onClick={handleClicked}
          className={
            coin.price_change_percentage_24h < 0 ? "watchlist-red" : "watchlist"
          } >
          <GradeRoundedIcon  sx={{
              color: clicked
                ? coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)"
                : "",
            }}/>
        </td>
      </Tooltip>
    </tr>
    </Link>
  );
}

export default List;
