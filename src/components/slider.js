import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { TbArrowBigRightFilled, TbArrowBigLeftFilled } from "react-icons/tb"

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: auto;
  min-height: 700px;
  margin: 0 auto 10vh auto;
`;

const Slide = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  opacity: ${(props) => (props.active ? "1" : "0")};
  transition: opacity 1s ease;
  margin: 0 auto;
`;

// const ArrowButton = styled.button`
//   position: absolute;

//   z-index: 1;
//   transform: translateY(-50%);
//   background: transparent;
//   border: none;
//   color: red;
//   font-size: 24px;
//   cursor: pointer;
//   ${(props) => (props.left ? "left: 10px;" : "right: 10px;")}
// `;

const Dot = styled.div`
  width: 30px;
  height: 30px;
  // border-radius: 50%;
  margin: 0 6px;
  border: 1px solid red;
background-color: ${(props) => (props.active ? "#ff0000" : "rgba(255, 255, 255, 0.1")};
  cursor: pointer;
  `;
   

const Dots = styled.div`
  position: absolute;
  display: flex;
  justifyContent: center;
  bottom: ;
  width: 300px;
  left: 45%;
  right: 50%;
  margin: 0 auto;
  margin-top:-50px;
  cursor: pointer;
  // transform: translateX(-50%);
`;

const Slider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeDot, setActiveDot] = useState(currentSlide);

  const goToSlide = (slideIndex) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(slideIndex);
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentSlide((prevSlide) => {
          const nextSlide = (prevSlide + 1) % children.length;
          setTimeout(() => setIsTransitioning(false), 1000);
          return nextSlide;
        });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [children.length, isTransitioning]);

  useEffect(() => {
    setActiveDot(currentSlide);
  }, [currentSlide]);

  return (
    <SliderContainer>
      {children.map((child, index) => (
        <Slide key={index} active={index === currentSlide}>
          {child}
          <Dots>
            
        {children.map((child, index) => (
          <Dot key={index} active={index === activeDot} onClick={() => goToSlide(index)} />
        ))}
      </Dots>
      {/* <ArrowButton left onClick={() => goToSlide((currentSlide - 1 + children.length) % children.length)}>
      <TbArrowBigLeftFilled />
      </ArrowButton> */}
      {/* <ArrowButton right onClick={() => goToSlide((currentSlide + 1) % children.length)}>
      <TbArrowBigRightFilled />
      </ArrowButton> */}
        </Slide>
      ))}
    </SliderContainer>
  );
};

export default Slider;
