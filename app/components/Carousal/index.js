import React from 'react';
import { Carousel as CarousalList } from 'react-responsive-carousel';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const StyledCarousal = styled(CarousalList)`
  .carousel.carousel-slider {
    max-height: 400px;
  }
`;

function Carousal() {
  return (
    <StyledCarousal showThumbs={false} showStatus={false} dynamicHeight>
      <div>
        <img src="http://react-responsive-carousel.js.org/assets/1.jpeg" />
      </div>
      <div>
        <img src="http://react-responsive-carousel.js.org/assets/2.jpeg" />
      </div>
      <div>
        <img src="http://react-responsive-carousel.js.org/assets/3.jpeg" />
      </div>
    </StyledCarousal>
  )
}

Carousal.propTypes = {};

export default Carousal;
