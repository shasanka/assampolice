import React, { Component } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, CardMedia } from "@material-ui/core";
import { image1, image2, image3, image4, image5, image6 } from "../utils/image";

class ImageCarousel extends Component {
  render() {
    const images = [image1, image2, image3, image4, image5, image6];
    return (
      <Carousel autoPlay interval={2500}>
        {images.map((item, i) => (
          <img
            style={{
              height: "700px",
              width: "100%",
              objectFit: "cover",
              //   borderRadius: "1%",
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
