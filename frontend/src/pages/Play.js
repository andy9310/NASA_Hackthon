import React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Redirect } from "react-router";

import "./Play.css";

import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";
//import { urlencoded } from "body-parser";
import { Link } from "react-router-dom";

export default function Play() {
  const strategies = useRef([]);
  const [displayed_strategie, setDisplayed_strategie] = useState(""); // only one strategy
  const [round, setRound] = useState(1);
  const [end, setEnd] = useState(false);
  const [back_img1, setBack_img1] = useState("");
  const [show_back_img1, setShow_back_img1] = useState(false);
  const [back_img2, setBack_img2] = useState("");
  const [show_back_img2, setShow_back_img2] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/api/strategy/random/11").then((res) => {
      
      strategies.current = res.data;

      // const _displayed_strategies = [];
      // _displayed_strategies.push(strategies.current[0]);
      // _displayed_strategies.push(strategies.current[1]);
      setDisplayed_strategie(strategies.current[0]);
      setBack_img1(strategies.current[0].picture);
      console.log("here")
      // setBack_img2(_displayed_strategies[1].pictures[0]);
    });
  }, [strategies]);

  const nextRound = (stage) => {
    if (round > 10) {
      return;
    }
    //const _displayed_strategies = [];
    // let index = 0;
    // if (displayed_strategies[1]["name"] === name) {
    //   index = 1;
    // }
    
    if (round < 10) {
      console.log("next round evoke")
      // if (index === 1) {
      //   _displayed_profiles.push(profiles.current[round + 1]);
      //   _displayed_profiles.push(displayed_profiles[index]);
      // } else {
      //   _displayed_profiles.push(displayed_profiles[index]);
      //   _displayed_profiles.push(profiles.current[round + 1]);
      // }
      setDisplayed_strategie(strategies.current[round+1]);
      console.log("stage : "+stage)
      console.log(strategies.current[round+1]);

      setBack_img1(strategies.current[round+1].picture);
      // setBack_img2(_displayed_profiles[1].pictures[0]);
    } else {
      // game over
      const ps = [];
      for (let i = 0; i <strategies.current.length; i++) {
        ps.push(
          axios.patch(
            `http://localhost:5000/api/strategy/${strategies.current[i]["name"]}`,
            {
              // showCnt: profiles.current[i]["showCnt"],
              // clickCnt: profiles.current[i]["clickCnt"],
            }
          )
        );
      }
      Promise.all(ps).then(() => {
        console.log("game over, data have been collect to the server");
        setEnd(true);
      });
      //   laoding to result page animation...
    }
    setRound((pre) => pre + 1);
  };

  return (
    <>
      {end ? (
        <Redirect to="/result" />
      ) : (
        <>
          <section className="container">
            <Link to="/">
              <h2 className="logo">NASA Hackthon</h2>
            </Link>

            <div className="back1"></div>
            <div
              style={
                back_img1
                  ? {
                      backgroundImage: `url(${back_img1})`,
                      opacity: show_back_img1 ? 1 : 0,
                    }
                  : {}
              }
              className="back2"
            ></div>
            {/* <div
              style={
                back_img2
                  ? {
                      backgroundImage: `url(${back_img2})`,
                      opacity: show_back_img2 ? 1 : 0,
                    }
                  : {}
              }
              className="back2"
            ></div> */}
            <div className="game-title">Choose to execute the strategy or not</div>
            <div className="card-container">
              {/* {displayed_profiles.map((p, index) => ( */}
                <Card
                  onIn={() => {
                    // index === 0
                    //   ? setShow_back_img1(true)
                    //   : setShow_back_img2(true);
                    setShow_back_img1(true);
                  }}
                  onOut={() => {
                    // index === 0
                    //   ? setShow_back_img1(false)
                    //   : setShow_back_img2(false);
                    setShow_back_img1(false);
                  }}
                  
                  stage={displayed_strategie.stage}
                  info={displayed_strategie.info}
                  picture={displayed_strategie.pictures}
                  onClick={nextRound}
                />
              {/* ))} */}
            </div>
            <ProgressBar round={round - 1} />
          </section>
        </>
      )}
    </>
  );
}
