import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ user, discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body-info">
        <div className="body-info-img">
          <img src={discover_weekly?.images[0]?.url} alt="" />
        </div>
        <div className="body-info-text">
          <span>PLAYLIST</span>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
          <p>Electronic</p>
        </div>
      </div>

      <div className="body-songs">
        <div className="body-icons">
          <PlayCircleFilled className="play-button" />
          <Favorite fontsize="large" />
          <MoreHoriz />
        </div>
      </div>
      {discover_weekly?.tracks.items.map((item) => (
        <SongRow track={item.track} />
      ))}
    </div>
  );
}

export default Body;
