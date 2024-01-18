// BoxComponent.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setColor } from "./boxSlice";

const BoxComponent = () => {
  const boxColor = useSelector((state) => state.box.color);
  const dispatch = useDispatch();

  const handleColorChange = () => {
    const newColor = prompt("Enter a new color:");
    dispatch(setColor(newColor));
  };

  return (
    <div>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: boxColor,
        }}
      >
        This is a box with color: {boxColor}
      </div>
      <button onClick={handleColorChange}>Change Color</button>
    </div>
  );
};

export default BoxComponent;
