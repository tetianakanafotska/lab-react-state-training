import React from "react";
import { useState } from "react";

function Carousel({ images }) {
  const [index, setIndex] = useState(0);
  const maxIndex = images.length - 1;
  return (
    <div>
      <button
        onClick={() => {
          //stops when reaches the end--->

          //   {
          //     index !== 0 && setIndex((prevIndex) => prevIndex - 1);
          //   }

          //loops over the images--->

          setIndex((prevIndex) => {
            if (prevIndex === 0) {
              return maxIndex;
            } else return prevIndex - 1;
          });
        }}
        className="like-button"
      >
        Left
      </button>
      <img src={images[index]} alt="user profile" />
      <button
        onClick={() => {
          //stops when reaches the end--->

          //   {
          //     index !== images.length - 1 &&
          //       setIndex((prevIndex) => prevIndex + 1);
          //   }

          //loops over the images--->

          setIndex((prevIndex) => {
            if (prevIndex === maxIndex) {
              return 0;
            } else return prevIndex + 1;
          });
        }}
        className="like-button"
      >
        Right
      </button>
    </div>
  );
}

export default Carousel;
