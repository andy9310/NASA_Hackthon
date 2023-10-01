import React from "react";
import "./Card.css";
import TinderCard from "react-tinder-card"
import './TinderCards.css'
export default function Card(props) {
  const {
    stage,
    info,
    picture,
    onClick,
    onIn,
    onOut,
  } = props;
  return (
    <>
        <TinderCard
          className="swipe"
          onClick={() => (onClick(stage)) }
          // onTouchEnd={() => alert('hello World!') }
          onMouseOver={onIn}
          onMouseOut={onOut}
          key={stage}
          preventSwipe={["up","down"]}
        >
          <img src={picture} alt=""></img>
          <div className="card">
              <div className="card-text">
                  <div className="name">{stage}</div>
                  <p className="intro">"{info}"</p>
              </div>
          </div>
        </TinderCard>
        {/* <div className="card-stats">
          {ig_followers ? (
            <>
              <a href={ig_link} target="_blank" rel="noreferrer">
                <i className="fab fa-instagram fa-3x"></i>
              </a>
              <div>
                <b>{ig_followers}</b>
                <br />
                Followers
              </div>
            </>
          ) : (
            <>
              <i className="fab fa-instagram fa-3x"></i>
              <div className="no-account-text">no official account</div>
            </>
          )}
        </div> */} 
    </>
  );
}
