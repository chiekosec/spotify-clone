import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header-left">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for Artists, Songs or Podcasts"
        />
      </div>
      <div className="header-right">
        <Avatar src={user?.images[0]?.url} alt="" />
        <span>{user?.display_name}</span>
      </div>
    </div>
  );
}

export default Header;
