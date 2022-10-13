import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Carouzel() {
  return (
    <div class="container">
      <Carousel>
        <Carousel.Item>
          <div
            style={{
              backgroundImage:
                "url(../../public/images/carousel/carousel-1.jpg)",
            }}
          ></div>
        </Carousel.Item>
        <Carousel.Item></Carousel.Item>
        <Carousel.Item></Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carouzel;
