import React, { Component } from "react";
import Carousel from "react-material-ui-carousel";
import { image1, image2, image3, image4, image5, image6 } from "../utils/image";

class ImageCarousel extends Component {
  render() {
    const images = [image1, image2, image3, image4, image5, image6];
    return (
      <Carousel autoPlay interval={3000} >
        {images.map((item, i) => (
          <img
            style={{
              height: "400px",
              width: "100%",
              objectFit: "cover",
              // borderRadius: "5%",
            }}
            key={i}
            src={item}
            alt=""
          />
        ))}
      </Carousel>
    );
  }
}
export default ImageCarousel;
