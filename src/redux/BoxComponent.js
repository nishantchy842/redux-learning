// BoxComponent.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setColor } from "./boxSlice";
import { ColorPicker } from "antd";


const BoxComponent = () => {
  const boxColor = useSelector((state) => state.box.color);
  const dispatch = useDispatch();

  const handleColorChange = (color) => {
    // const newColor = prompt("Enter a new color:");
    dispatch(setColor(color));
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
      <ColorPicker onChange={(value, hex) => handleColorChange(hex)} />

      {/* <button onClick={handleColorChange}>Change Color</button> */}
    </div>
  );
};

export default BoxComponent;
