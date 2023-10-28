/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
import "./Slider.css";
import { useEffect, useRef, useState } from "react";
import { sliderData } from "./sliderData";
import SliderItem from "./SliderItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const auto = false; // Auto scroll
  const intervalTime = 4000;
  let slideInterval = useRef(null);

  const handleSlider = (direction) => {
    if (direction === "next") {
      if (currentSlide === sliderData.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide((prev) => prev + 1);
      }
    } else {
      if (currentSlide === 0) {
        setCurrentSlide(sliderData.length - 1);
      } else {
        setCurrentSlide((prev) => prev - 1);
      }
    }
  };
  useEffect(() => {
    // Run next slide at interval time
    if (auto) {
      slideInterval.current = setInterval(() => {
        handleSlider("next");
      }, intervalTime);
    }
    () => {
      clearInterval(slideInterval.current);
    };
  }, []);

  return (
    <div className="container">
      <div className="slider">
        {sliderData &&
          sliderData.map((item, index) => {
            return (
              <SliderItem
                item={item}
                key={index}
                index={index}
                currentSlide={currentSlide}
              />
            );
          })}
      </div>
      <div className="buttons">
        <button
          id="prev"
          onClick={() => {
            handleSlider("prev");
          }}
        >
          <FontAwesomeIcon icon="fas fa-arrow-left" />
        </button>
        <button
          id="next"
          onClick={() => {
            handleSlider("next");
          }}
        >
          <FontAwesomeIcon icon="fas fa-arrow-right" />
        </button>
      </div>
    </div>
  );
}
