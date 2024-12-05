import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "animate.css";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider settings with the afterChange callback
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    cssEase: "ease-in-out",
    afterChange: (index) => setCurrentSlide(index), // Track the current slide index
  };

  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co.com/6sMHtvg/Funding-2.jpg",
      title: "YOU HELP PEOPLE?",
      title2: "BECOME A VOLUNTEER",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident corporis ut architecto? Enim corrupti eum quis. Eveniet voluptas voluptatum repellat?",
      titleAnimation: "animate__backInLeft",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/4SBsxvt/920x0.jpg",
      title: "NEED CHANGES?",
      title2: "MAKE A DONATION",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident corporis ut architecto? Enim corrupti eum quis. Eveniet voluptas voluptatum repellat?",
      titleAnimation: "animate__rubberBand",
    },
    {
      id: 3,
      image:
        "https://i.ibb.co.com/d0rmG8H/360-F-651514405-e-Wka-Nig-EBu-X3-IF707j-HXL4g-P0-Ng-Rop-Ip.jpg",
      title: "MAKE A DONATION",
      title2: "BECOME A VOLUNTEER",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident corporis ut architecto? Enim corrupti eum quis. Eveniet voluptas voluptatum repellat?",
      titleAnimation: "animate__flipInY animate__slow",
    },
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-screen object-top object-cover"
            />
            <div className="absolute top-0 flex flex-col justify-center items-start pl-24 h-screen text-white left-0 z-30 font-bold space-y-4">
              <h1
                className={`animate__animated ${
                  currentSlide === index
                    ? `${slide.titleAnimation}`
                    : "animate__fadeOut"
                } text-5xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text`}
              >
                {slide.title}
              </h1>
              <h1
                className={`animate__animated ${
                  currentSlide === index
                    ? "animate__backInRight"
                    : "animate__fadeOut"
                } text-5xl font-bold bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text`}
              >
                {slide.title2}
              </h1>
              <p
                className={`w-1/2 text-gray-500 animate__animated ${
                  currentSlide === index
                    ? "animate__backInLeft"
                    : "animate__fadeOut"
                }`}
              >
                {slide.description}
              </p>
              <a
                href="#running"
                className={`animate__animated ${
                  currentSlide === index
                    ? "animate__backInRight"
                    : "animate__fadeOut"
                } btn bg-gradient-to-r from-primary to-secondary text-white`}
              >
                Donate Now
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
