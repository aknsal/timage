import React from "react";
import Transitions from "../../components/transitions/transition";
import Timeline from "../../components/timeline/timeline";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { alpha, makeStyles, useTheme } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  dashboard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
}));

export function TimelineStoneAge() {
  const classes = useStyles();
  return (
    <div className={classes.dashboard}>
      <Timeline />
      <IconButton
        component={Link}
        to="/bronzeage"
        color="inherit"
        aria-label="open drawer"
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
}
