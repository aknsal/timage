import React, { useState, useRef, useEffect } from "react";
// import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Chrono } from "react-chrono";
// import data from "./data";
import { Modal } from "@material-ui/core";
import VanillaTilt from "vanilla-tilt";
import axios from "axios";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`
//   };
// }

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Timeline(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const article = { age: "Stone Age" };
    axios
      .post("https://infinite-brook-72848.herokuapp.com/getallage", article)
      .then((response) => setData(response.data.data))
      // .then((dataRec) => setData(dataRec.data.data))
      .catch((err) => console.log(err));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  // const data=[];
  // const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({});
  const handleOpen1 = (insideData) => {
    console.log(insideData);
    // console.log(insideData, "   ");/
    setModalData(insideData);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div
      className="modal--timeline"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <h2 className="modal-title"> {modalData.title} </h2>
      <ul class="two-col">
        <li style={{ fontSize: 30 }}>Stone Age</li>
        <li>{modalData.cardDetailedText1}</li>
      </ul>
      <button class="close-btn" onClick={() => setOpen(false)}>
        {" "}
        Close{" "}
      </button>
    </div>
  );

  console.log(props.theme);

  const options = {
    scale: 1.0,
    speed: 1000,
    max: 30,
  };

  return (
    <div className="App">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      {data.length != 0 ? (
        <div style={{ width: "60vw", height: "90vh" }}>
          <Chrono items={data} mode="VERTICAL_ALTERNATING" theme={props.theme}>
            {data.map((curr_elem, key) => {
              console.log("index", curr_elem, key);
              return (
                <div>
                  <Tilt className="card--timeline" options={options}>
                    <div
                      className="card--timeline"
                      style={{ marginRight: "0.35rem" }}
                    >
                      <div className="card-title">
                        <h1>{curr_elem.cardTitle1}</h1>
                      </div>
                      <div className="card-data">
                        <p>{curr_elem.cardSubtitle1}</p>
                      </div>
                      <button
                        className="btn"
                        type="button"
                        onClick={(e) => handleOpen1(curr_elem)}
                      >
                        More Information
                      </button>
                    </div>
                  </Tilt>
                </div>
              );
            })}

            {/* <div>

        <button type="button" onClick={handleOpen}>
        Open Modal
      </button>

    </div> */}
          </Chrono>
        </div>
      ) : null}
    </div>
  );
}
