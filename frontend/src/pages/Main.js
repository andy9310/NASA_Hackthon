import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Tutorial from "./Tutorial";
import "./Main.css";
import { Link } from "react-router-dom";

export default function Main() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header>
        <a href="#home">
          <h2 className="logo">Sexiest</h2>
        </a>

        <div
          onClick={() => setOpenMenu((pre) => !pre)}
          className={openMenu ? "toggle active" : "toggle"}
        ></div>
      </header>
      <Home />
      <About />
      <Tutorial />
      <div className={openMenu ? "menu active" : "menu"}>
        <ul>
          <li>
            <a href="/">
              <div>Home</div>
            </a>
          </li>
          <li>
            <a href="#tutorial">
              <div>Tutorial</div>
            </a>
          </li>
          <li>
            <Link to="/play">
              <div>Play</div>
            </Link>
          </li>
          <li>
            <Link to="/result">
              <div>Rank</div>
            </Link>
          </li>
          <li>
            <a href="#about">
              <div>About</div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
