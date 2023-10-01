import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Result.css";
import RankCard from "../components/RankCard";
import axios from "axios";

const randomNumbers = (min, max, count, in_arr) => {
  const arr = [];
  const out_arr = [];
  if (max < count) {
    throw Error("not enough distinct values");
  }
  while (arr.length < count) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    if (!arr.includes(num)) {
      arr.push(num);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    out_arr.push(in_arr[arr[i]]);
  }
  return out_arr;
};

export default function Result() {
  const [profiles, setProfiles] = useState([]);
  const [displayed_profile, setDisplayed_profile] = useState({});
  const [displayed_pictures, setDisplayed_pictures] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const foo = async () => {
      const res = await axios.get("http://localhost:5000/api/profile/top/10");
      setProfiles(res.data);
      setDisplayed_profile({ ...res.data[0] });
      const d_pics = randomNumbers(
        0,
        res.data[0].pictures.length,
        9,
        res.data[0].pictures
      );
      setDisplayed_pictures(d_pics);
    };
    foo();
  }, []);
  return (
    <>
      <div className="nav-in-container">
        <header>
          <Link to="/">
            <h2 className="logo">Sexiest</h2>
          </Link>

          <div
            onClick={() => setOpenMenu((pre) => !pre)}
            className={openMenu ? "toggle active" : "toggle"}
          ></div>
        </header>
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
        <div className="result-container">
          <div className="show-profile">
            {/* <div className="blur"></div> */}
            {displayed_profile.name ? (
              <>
                <div className="stats">
                  <h1 className="name">{displayed_profile.name}</h1>
                  <h2 className="title">{displayed_profile.title}</h2>
                  <div className="detail-intro">
                    {displayed_profile.detail_intro}
                  </div>
                </div>

                <div className="social-links">
                  <ul className="social">
                    <li>
                      <a href={displayed_profile.fb_link}>
                        <i class="fab fa-facebook-square fa-2x"></i>
                      </a>
                    </li>
                    <li>
                      <a href={displayed_profile.tw_link}>
                        <i class="fab fa-twitter-square fa-2x"></i>
                      </a>
                    </li>
                    <li>
                      <a href={displayed_profile.ig_link}>
                        <i class="fab fa-instagram-square fa-2x"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="img-gallery-container">
                  {displayed_pictures !== [] ? (
                    displayed_pictures.map((p) => (
                      <>
                        <div className="image">
                          <img src={p} />
                        </div>
                      </>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              </>
            ) : (
              <h1>loading...</h1>
            )}
          </div>
          <div className="rank-list">
            <h1 className="title-text">Ranking Board</h1>

            {profiles.map((p, i) => (
              <RankCard
                key={i}
                onClick={(i) => {
                  console.log(profiles[i]);
                  setDisplayed_profile(() => {
                    return { ...profiles[i] };
                  });
                  setDisplayed_pictures(
                    randomNumbers(
                      0,
                      profiles[i].pictures.length,
                      9,
                      profiles[i].pictures
                    )
                  );
                }}
                rank={i + 1}
                rate={p.rate}
                name={p.name}
                title={p.title}
                img_url={p.pictures[0]}
                ig_follwers={p.ig_follwers}
                ig_link={p.ig_link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
