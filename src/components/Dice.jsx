import React from "react";
import { useState } from "react";
import { useRef } from "react";
import diceEmpty from "/src/assets/images/dice-empty.png";
import dice1 from "/src/assets/images/dice1.png";
import dice2 from "/src/assets/images/dice2.png";
import dice3 from "/src/assets/images/dice3.png";
import dice4 from "/src/assets/images/dice4.png";
import dice5 from "/src/assets/images/dice5.png";
import dice6 from "/src/assets/images/dice6.png";

const dicesArray = [dice1, dice2, dice3, dice4, dice5, dice6];

const randomIndexFunc = () => {
  return Math.floor(Math.random() * 6);
};

const randomIndexFuncNonRepetitive = (lastPicNumber) => {
  const randomPicNumber = Math.floor(Math.random() * 6);
  if (lastPicNumber === randomPicNumber) {
    return randomIndexFuncNonRepetitive(lastPicNumber);
  } else {
    return randomPicNumber;
  }
};

function Dice() {
  const [dicePic, setDicePic] = useState(dicesArray[randomIndexFunc()]);
  const [clickedToStop, setClickedToStop] = useState(false);
  const intervalIDRef = useRef(null);
  const lastPicNumberRef = useRef(null);

  const handleClick = () => {
    if (!clickedToStop) {
      setClickedToStop(true);
      setDicePic(diceEmpty);
      intervalIDRef.current = setInterval(() => {
        const randomPicNumber1 = randomIndexFuncNonRepetitive(
          lastPicNumberRef.current
        );
        lastPicNumberRef.current = randomPicNumber1;
        console.log(randomPicNumber1);
        setDicePic(dicesArray[randomPicNumber1]);
      }, 1000);
    } else {
      clearInterval(intervalIDRef.current);
      setClickedToStop(false);
    }
  };

  return (
    <img
      className="dice"
      onClick={handleClick}
      src={dicePic}
      alt="dice"
      width={50}
    />
  );
}

export default Dice;
