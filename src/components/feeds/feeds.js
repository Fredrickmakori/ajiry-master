import React from "react";
import communication from "./communication.jpeg";
import coordinator from "./coordinator.jpeg";
import "./feeds.css";
export default function Feeds() {
  return (
    <>
      <div className="feed-Container">
        <p>Feeds</p>
        <div className="img-info">
          <div className="imgElement">
            <img src={communication} alt="img1" />
          </div>
          <b>Communication</b>
          <p>CEO</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          quidem.
        </p>
        <span className="twich">
          <i className="bi bi-hand-thumbs-up"></i>
          <t />
          <i className="bi bi-share"></i>
          <t />
          <i className="bi bi-chat"></i>
          <div className="feed-Container">
            <div className="img-info">
              <div className="imgElement">
                <img src={coordinator} alt="img1" />
              </div>
              <b>Communication</b>
              <p>CEO</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, quidem.
            </p>
            <span className="twich">
              <a>Like</a>
              <t />
              <a>Share</a>
              <t />
              <a>Comment</a>
            </span>
          </div>
          ;
        </span>
      </div>
      ;
    </>
  );
}
