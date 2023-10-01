import React from "react";
import "./RankCard.css";

function score(rate) {
  const tmp = (1 - rate) * 100;
  rate = 100 - tmp / 2 + Math.sqrt(tmp);
  return Math.floor(rate);
}

export default ({ rank, rate, name, title, img_url, onClick }) => {
  rate = score(rate);
  return (
    <>
      <div onClick={() => onClick(rank - 1)} className="rank-card-container">
        <div className="img-container">
          <img src={img_url} />
        </div>
        <div className="rank-text">
          <div className="rank-number">
            <b>{rank}.</b>
          </div>
          <div className="name">{name}</div>
          <div className="title">{title}</div>
        </div>
        <div className="rank-rate">
          <div className="progess-card">
            <div className="box">
              <div className="percent">
                <svg>
                  <circle cx="45" cy="45" r="45"></circle>
                  <circle
                    style={{ "--rate": rate }}
                    cx="45"
                    cy="45"
                    r="45"
                  ></circle>
                </svg>
                <div className="number">
                  <h2>
                    {rate}
                    <span>%</span>
                  </h2>
                </div>
              </div>
              {/* <h2 className="progress-text">Html</h2> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
