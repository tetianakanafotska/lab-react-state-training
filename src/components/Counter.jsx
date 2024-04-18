import React from "react";
import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <div className="counter">
      <button
        disabled={isDisabled}
        onClick={() => {
          if (number === 0) {
            setIsDisabled(true);
          } else {
            setNumber(number - 1);
          }
        }}
      >
        -
      </button>
      {number}
      <button
        onClick={() => {
          setIsDisabled(false);
          setNumber(number + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
