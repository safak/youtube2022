import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [ "https://static.zarahome.net/8/contentEcom/dto_imagen/home/slider/desktop/brocante.jpg?20230815021705&imformat=chrome&imwidth=1366&impolicy=zarahome-itxmedium",
  "https://static.zarahome.net/8/contentEcom/dto_imagen/home/slider/desktop/novedades_230811.jpg?20230815172700&imformat=chrome&imwidth=1366&impolicy=zarahome-itxmedium",
  "https://static.zarahome.net/8/contentEcom/dto_imagen/home/slider/desktop/vincent_collection.jpg?20230815021705&imformat=chrome&imwidth=1366&impolicy=zarahome-itxmedium",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;