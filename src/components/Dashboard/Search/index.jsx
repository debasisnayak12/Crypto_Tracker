import React, { useState } from "react";
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Search = ({search, onSearhChange}) => {
  
  return (
    <div className="searchbar">
      <SearchRoundedIcon style={{ color: "var(--grey)" }} />
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => onSearhChange(e)}
      />
    </div>
  );
};

export default Search;
