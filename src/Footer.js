import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <img src="" alt="" className="footer-img" />
        <div className="footer-songInfo">
          <span className="song-name">Song name</span>
          <span className="artists">Artist1, Artist2</span>
        </div>
      </div>
      <div className="footer-center">
        <ShuffleIcon className="footer-icon footer-green"></ShuffleIcon>
        <SkipPreviousIcon className="footer-icon"></SkipPreviousIcon>
        <PlayCircleOutlineIcon
          fontSize="large"
          className="footer-icon"
        ></PlayCircleOutlineIcon>
        <SkipNextIcon className="footer-icon"></SkipNextIcon>
        <RepeatIcon className="footer-icon footer-green"></RepeatIcon>
      </div>
      <div className="footer-right">
        <Grid container spacing={2} className="footer-right-grid">
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs className="slider">
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
