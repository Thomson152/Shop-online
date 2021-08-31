import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  const data = [
    {
      image: require("../images/product-1.png"),
      caption: "Caption",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum sunt deleniti culpa officii necessitatibus labore, natus explicabo incidunt laboriosam quod.",
    },
    {
      image: require("../images/slider-1.png"),
      caption: "Caption",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum sunt deleniti culpa officiis necessitatibus labore, natus explicabo incidunt laboriosam quod.",
    },
    {
      image: require("../images/slider-3.png"),
      caption: "Caption",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum sunt deleniti culpa officiis necessitatibus labore, natus explicabo incidunt laboriosam quod.",
    },
  ];

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((slide, i) => {
        return (
          <div className="container">
            <Carousel.Item>
         <div className= "row d-flex align-items-center"></div>
              <div className="col-6">
                <img className="d-block w-100" src={slide.image} alt="slider image"  />
              </div>
              <Carousel.Caption>
                <div className="col-6"> <h3>{slide.caption}</h3>  <p>{slide.description}</p> </div>
              </Carousel.Caption>
            </Carousel.Item>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Banner;
