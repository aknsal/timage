import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { DinoCard } from "../dinoCard/DinoCard";
import dinosData from "../dinosData/dinoData";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  // card: {
  //   // Provide some spacing between cards
  //
  //   // Use flex layout with column direction for components in the card
  //   // (CardContent and CardActions)
  //   display: "flex",
  //   flexDirection: "column",
  //
  //   // Justify the content so that CardContent will always be at the top of the card,
  //   // and CardActions will be at the bottom
  //   justifyContent: "space-between",
  //   flex: 1,
  // },
}));

export function DinoContainer() {
  const classes = useStyles();
  console.log(dinosData);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {dinosData.map((dinoData) => (
          <Grid item xs={11} lg={3} md={4} sm={6} className={classes.card}>
            <DinoCard dinoData={dinoData} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
