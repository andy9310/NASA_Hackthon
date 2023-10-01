import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Tutorial.css";
import "../components/ExampleCard";
import ExampleCard from "../components/ExampleCard";

export default function Tutorial() {
  const [haveChoosen, setHaveChoosen] = useState(false);
  const [clickContinue, setClickContinue] = useState(false);
  return (
    <>
      <section id="tutorial" className="tutorial-container">
        <div className="left-back">
          <div className="tutorial-text">
            <h1>How To Play?</h1>
            <p>
              This is a very simple game, we will display two celebrity at a
              time, simply pick the one you like more. Don't have to think too
              much just follow your heart~
            </p>
          </div>
          <div
            onClick={() => setClickContinue(true)}
            className={
              "tutor-continue-btn " + (clickContinue ? "m-fadeOut" : "")
            }
          >
            Continue
          </div>
        </div>
        <div
          className={"right-back " + (clickContinue ? "tutor-continue" : "")}
        >
          <div className="right-tutor">
            <h3 className={"instruct-text " + (haveChoosen ? "m-fadeOut" : "")}>
              Click your favor one!
            </h3>
            <div className="ex-cards-container">
              <ExampleCard onClick={() => setHaveChoosen(true)} num={1} />
              <ExampleCard onClick={() => setHaveChoosen(true)} num={2} />
            </div>
            <div
              className={"show-after-select " + (haveChoosen ? "m-fadeIn" : "")}
            >
              <p>You have learn how to play, simple right?</p>
              <Link to="/play">
                <div className="tutor-btn">start playing</div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
