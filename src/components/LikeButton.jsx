import React from "react";
import { useState } from "react";

function LikeButton() {
  const [clicksNumber, setClicksNumber] = useState(0);

  return (
    <button
      className="like-button"
      onClick={() => {
        setClicksNumber((prevNumber) => prevNumber + 1);
      }}
    >
      {clicksNumber + " "}Likes
    </button>
  );
}

export default LikeButton;
