import React, { useEffect, useState } from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import "./styles.css";
import { Link } from "react-router-dom";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";

const Grid = ({ coin }) => {
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
    <div
      className={`grid-container ${
        coin.price_change_percentage_24h < 0 && "grid-container-red"
      }`}
    >
      <div className="info-flex">
        <div className="left-side">
          <img src={coin.image} className="coin-logo" />
          <div className="name-info">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </div>
        <div
          onClick={handleClicked}
          className={
            coin.price_change_percentage_24h < 0 ? "watchlist-red" : "watchlist"
          }
        >
          <GradeRoundedIcon
            sx={{
              color: clicked
                ? coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)"
                : "",
            }}
          />
        </div>
      </div>
      <Link to={`/coin/${coin.id}`}>
        {coin.price_change_percentage_24h > 0 ? (
          <div className="chip-flex">
            <div className="chip-price">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip">
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="chip-price chip-red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip chip-red">
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}
        <div className="coin-info">
          <h3
            className="coin-price"
            style={{
              color:
                coin.price_change_percentage_24h > 0
                  ? "var(--green)"
                  : "var(--red)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
          <p className="total-volume">
            Total Volume : ${coin.total_volume.toLocaleString()}
          </p>
          <p className="total-volume">
            Market Cap : ${coin.market_cap.toLocaleString()}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Grid;
