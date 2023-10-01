import React, { useState } from "react";
// import "../App.css";
// import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section id="home" className="showcase ">
        <video
          src={process.env.PUBLIC_URL + "home.mp4"}
          muted
          loop
          autoPlay
        ></video>
        <div className="overlay"></div>
        <div className="text">
          <h2>Find your</h2>
          <h3>celebrity crush</h3>
          <p>A mini game for you to find your type </p>
          <Link to="/play">
            <div className="home-start-btn">start</div>
          </Link>
          <a href="#about">
            <div className="home-guide-btn">guide</div>
          </a>
        </div>
      </section>
    </>
  );
}
