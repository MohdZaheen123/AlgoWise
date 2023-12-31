'use client'

import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LogoCarousel = ({ logos }) => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false
  };

  return (
    <div className="mx-auto max-w-[100%] md:max-w-2xl mt-5">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="h-20">
            <p className=' bg-gray-800 text-white text-sm md:text-base text-center rounded-md mx-1 px-1'>{logo}</p>
          </div>
        ))}

      </Slider>
    </div>
  );
};

export default LogoCarousel;
