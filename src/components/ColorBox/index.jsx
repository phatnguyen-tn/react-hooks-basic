import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ColorBox.scss";

ColorBox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ["deeppink", "green", "red", "yellow", "blue"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function ColorBox(props) {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box-color") || "deeppink";
    return initColor;
  });

  function handleBoxClick() {
    // get random color --> set color
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box-color", newColor);
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    ></div>
  );
}

export default ColorBox;
