import React from "react";
import "./Cube.css";

const Cube = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="box-area">
          <div id="box-front" className="box"></div>
          <div id="box-right" className="box"></div>
          <div id="box-back" className="box"></div>
          <div id="box-left" className="box"></div>
          <div id="box-top" className="box"></div>
          <div id="box-bottom" className="box"></div>
        </div>
      </div>
    </div>
  );
};

export default Cube;
