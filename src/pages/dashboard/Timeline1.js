import React from "react";
import Transitions from "../../components/transitions/transition";
import Timeline1 from "../../components/timeline/timeline1";
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
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export function TimelineBronzeAge() {
  const classes = useStyles();
  return (
    <div className={classes.dashboard}>
      <IconButton component={Link} to="/stoneage" color="inherit">
        <ArrowBackIosIcon />
      </IconButton>
      <Timeline1 />
      <IconButton
        component={Link}
        to="/ironage"
        color="inherit"
        aria-label="open drawer"
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
}
