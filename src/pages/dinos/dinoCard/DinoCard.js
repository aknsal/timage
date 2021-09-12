import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: "100%",
    backgroundColor: "#defaed",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  media: {
    height: 140,
  },
  propContainerMajor: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  propContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    fontSize: 18,
  },
  propName: {
    flex: 1,
    paddingRight: 15,
    fontWeight: "bold",
  },
  propValue: {
    maxWidth: 200,
  },
});

export function DinoCard({ dinoData }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} raised="false">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={dinoData.image}
          title={dinoData.name}
        />
        <CardContent>
          <Typography align="left" gutterBottom variant="h4" component="h2">
            {dinoData.name}
          </Typography>
          {/* <div className={classes.propContainerMajor}>
            <div className={classes.propContainer}>
              <div className={classes.propName}> Speed </div>
              <div className={classes.propValue}> {dinoData.speed} </div>
            </div>
            <div className={classes.propContainer}>
              <div className={classes.propName}> Habitat : </div>
              <div className={classes.propValue}> {dinoData.habitat} </div>
            </div>
            <div className={classes.propContainer}>
              <div className={classes.propName}> Existence : </div>
              <div className={classes.propValue}> {dinoData.existence} </div>
            </div>
            <div className={classes.propContainer}>
              <div className={classes.propName}> Height : </div>
              <div className={classes.propValue}> {dinoData.height} </div>
            </div>
          </div> */}
          <div className={classes.propContainerMajor}>
            {dinoData.weight ? (
              <div className={classes.propContainer}>
                <Typography className={classes.propName}> Weight </Typography>
                <Typography className={classes.propValue}>
                  {" "}
                  {dinoData.weight}{" "}
                </Typography>{" "}
              </div>
            ) : null}
            {dinoData.speed ? (
              <div className={classes.propContainer}>
                <Typography className={classes.propName}> Speed </Typography>
                <Typography className={classes.propValue}>
                  {" "}
                  {dinoData.speed}{" "}
                </Typography>{" "}
              </div>
            ) : null}
            {dinoData.height ? (
              <div className={classes.propContainer}>
                <Typography className={classes.propName}> Height </Typography>
                <Typography className={classes.propValue}>
                  {" "}
                  {dinoData.height}{" "}
                </Typography>{" "}
              </div>
            ) : null}
            {dinoData.habitat ? (
              <div className={classes.propContainer}>
                <Typography className={classes.propName}> Habitat </Typography>
                <Typography className={classes.propValue}>
                  {" "}
                  {dinoData.habitat}{" "}
                </Typography>{" "}
              </div>
            ) : null}
            {dinoData.existence ? (
              <div className={classes.propContainer}>
                <Typography className={classes.propName}>
                  {" "}
                  Existence{" "}
                </Typography>
                <Typography className={classes.propValue}>
                  {" "}
                  {dinoData.existence}{" "}
                </Typography>{" "}
              </div>
            ) : null}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="#11302a">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
