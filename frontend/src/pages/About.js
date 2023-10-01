import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <>
      <section id="about" className="about-container">
        <div className="introduction">
          <div className="intro-cover"></div>
          <div className="intro-text">
            <h1>What is this?</h1>
            <p>
              This webiste let you choose the celebrity you like the most. Kinda
              like a mini game. after playing it will display the top vote
              celebrity from all the player.
            </p>
          </div>
        </div>
        <div className="inspiration">
          <div className="inspiration-text">
            <h1>what inspire us?</h1>
            <p>
              This website is inspired by the movie Social Network the scene
              when Mark Zuckerberg design a website that rank all the girls in
              dorm. This sound like a fun project to work on but it is not
              ethical to do, hence we settle on voting your favor celebrity.
            </p>
          </div>
        </div>
        <div className="continue-btn">
          <a href="#tutorial">
            <div>Continue</div>
          </a>
        </div>
      </section>
    </>
  );
}
