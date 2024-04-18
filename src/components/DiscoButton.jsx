import React from "react";
import { useState } from "react";

function DiscoButton() {
  const [clicksNumber, setClicksNumber] = useState(0);
  const colorsArray = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [color, setColor] = useState(colorsArray[0]);

  return (
    <button
      className="like-button"
      style={{ backgroundColor: color }}
      onClick={() => {
        setClicksNumber((prevNumber) => prevNumber + 1);
        setColor(colorsArray[(clicksNumber + 1) % 6]);
      }}
    >
      {clicksNumber + " "}Likes
    </button>
  );
}

export default DiscoButton;
