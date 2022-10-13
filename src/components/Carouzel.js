import React from "react";
import MyBackgroundImage1 from "../images/carousel/carousel-1.jpg";

function Carouzel() {
  return (
    <div
      style={{
        backgroundImage: `url(${MyBackgroundImage1})`,
        width: 660,
        height: "auto",
      }}
    ></div>
  );
}

export default Carouzel;
