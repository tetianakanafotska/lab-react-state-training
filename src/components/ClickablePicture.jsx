import React from "react";
import maxenceGlasses from "/src/assets/images/maxence-glasses.png";
import maxence from "/src/assets/images/maxence.png";
import { useState } from "react";

function ClickablePicture() {
  const [pic, setPic] = useState(maxenceGlasses);
  return (
    <div className="clickable-picture-boy">
      <img
        onClick={() =>
          pic === maxenceGlasses ? setPic(maxence) : setPic(maxenceGlasses)
        }
        src={pic}
        alt="picture"
        width={300}
      />
    </div>
  );
}

export default ClickablePicture;
