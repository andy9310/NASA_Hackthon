import React from "react";
import "./ProgressBar.css";

export default function ProgressBar(props) {
  const round = props.round;
  return (
    <>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ "--width": round * 9 + 1 }}
          text={`${round}/10`}
        ></div>
      </div>
    </>
  );
}
