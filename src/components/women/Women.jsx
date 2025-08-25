import React from "react";
import "./Women.css";

import women11 from "../imgs/women11.jpg";
import women0 from "../imgs/women0.jpg";
import women1 from "../imgs/women1.jpg";
import women2 from "../imgs/women2.jpg";

const Women = () => {
  return (
    <div className="women-section">
      <h2 className="women-heading">WOMEN</h2>
      <div className="women-categories">
        <div className="women-card">
          <img src={women11} alt="Pret" />
          <p>Pret</p>
        </div>
        <div className="women-card">
          <img src={women0} alt="Unstitched" />
          <p>Unstitched</p>
        </div>
        <div className="women-card">
          <img src={women2} alt="Bottoms" />
          <p>Bottoms</p>
        </div>
      </div>
    </div>
  );
};

export default Women;