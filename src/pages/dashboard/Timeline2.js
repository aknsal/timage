import React from "react";
import Transitions from "../../components/transitions/transition";
import Timeline2 from "../../components/timeline/timeline2";
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

export function TimelineIronAge() {
  const classes = useStyles();
  return (
    <div className={classes.dashboard}>
      <IconButton component={Link} to="/bronzeage" color="inherit">
        <ArrowBackIosIcon />
      </IconButton>
      <Timeline2 />
    </div>
  );
}
