import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";

const HomeCarousel = () => {
  return (
    <div className="CarouselSlides">
      <Carousel controls="True">
        <Carousel.Item active>
          <img
            className="d-block w-100 home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/sm/Evergreen_Shared/June2022/June2022_GW_DesktopHero_3000x1200_UK._CB635752309_.jpg"
            alt="slide1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 home__image"
            src="https://m.media-amazon.com/images/I/71hhXJZ2NoL._SX3000_.jpg"
            alt="slide2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 home__image"
            src="https://m.media-amazon.com/images/I/61WMiHfwH9L._SX3000_.jpg"
            alt="slide2"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 home__image"
            src="https://m.media-amazon.com/images/I/91LowXdMdfL._SX3000_.jpg"
            alt="slide2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 home__image"
            src="https://m.media-amazon.com/images/I/81HhhkLOvtL._SX3000_.jpg"
            alt="slide3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 home__image"
            src="https://m.media-amazon.com/images/I/61C8fu9LeoL._SX3000_.jpg"
            alt="slide4"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 home__image"
            src="https://m.media-amazon.com/images/I/71NTnE1LzuL._SX3000_.jpg"
            alt="slide5"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 home__image"
            src="https://m.media-amazon.com/images/I/710HuE2n6LL._SX3000_.jpg"
            alt="slide6"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 home__image"
            src="https://m.media-amazon.com/images/I/61DakICHbPL._SX3000_.jpg"
            alt="slide7"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 home__image"
            src="https://m.media-amazon.com/images/I/71zAnCFD3BL._SX3000_.jpg"
            alt="slide8"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 home__image"
            src="https://m.media-amazon.com/images/I/41gn5tK63lL._SX3000_.jpg"
            alt="slide9"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 home__image"
            src="https://m.media-amazon.com/images/I/51YHIlVFunL._SX3000_.jpg"
            alt="slide11"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
