/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable linebreak-style */
import React from 'react';
import { Carousel as CarousalList } from 'react-responsive-carousel';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const StyledCarousal = styled(CarousalList)`
  .carousel .thumb img {
    width: 100% !important;
    height: 100% !important;
  }

  .carousel .slide img {
    max-height: 400px;
    width: 100%;
  }
`;

function Carousal() {
  return (
    <StyledCarousal showThumbs={false} showStatus={false} dynamicHeight>
      <div>
        <img src="http://static.asiawebdirect.com/m/bangkok/portals/bali-indonesia-com/homepage/top10/top10-restaurants-sanur/pagePropertiesImage/best-restaurants-sanur.jpg.jpg" />
      </div>
      <div>
        <img src="https://media.gq.com/photos/573e23554bf860ff12c0e961/master/w_2000/best-restaurants-gq-0616-03.jpg" />
      </div>
      <div>
        <img src="https://www.omnihotels.com/-/media/images/hotels/homrst/restaurants/homrst-omni-homestead-resort-jeffersons-restaurant-2.jpg" />
      </div>
    </StyledCarousal>
  );
}

Carousal.propTypes = {};

export default Carousal;
