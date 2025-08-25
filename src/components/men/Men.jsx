import React from "react";
import "./Men.css";

import men1 from "../imgs/men1.jpg";
import men4 from "../imgs/men4.jpg";
import men3 from "../imgs/men3.jpg";

const Men = () => {
  return (
    <div className="men-section">
      <h2 className="men-heading">MEN</h2>
      <div className="men-categories">
        <div className="men-card">
          <img src={men1} alt="Pret" />
          <p>Unstitched</p>
        </div>
        <div className="men-card">
          <img src={men4} alt="Unstitched" />
          <p>Luxury</p>
        </div>
        <div className="men-card">
          <img src={men3} alt="FTB" />
          <p>Stitched</p>
        </div>
      </div>
    </div>
  );
};

export default Men;