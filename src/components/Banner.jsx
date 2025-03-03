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
        "Join our mission to make a difference in the lives of those in need. Become a volunteer today and help spread warmth and hope.",
      titleAnimation: "animate__backInLeft",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/4SBsxvt/920x0.jpg",
      title: "NEED CHANGES?",
      title2: "MAKE A DONATION",
      description:
        "Your contribution can create lasting change in someone's life. Donate now and help provide warmth and comfort to those in need.",
      titleAnimation: "animate__rubberBand",
    },
    {
      id: 3,
      image:
        "https://i.ibb.co.com/d0rmG8H/360-F-651514405-e-Wka-Nig-EBu-X3-IF707j-HXL4g-P0-Ng-Rop-Ip.jpg",
      title: "MAKE A DONATION",
      title2: "BECOME A VOLUNTEER",
      description:
        "Your donation can make a real difference in someone's life. Or, volunteer your time to help spread warmth and kindness to those in need.",
      titleAnimation: "animate__flipInY animate__slow",
    },
  ];

  return (
    <div className="w-full ">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative max-h-[calc(100vh-150px)]">
            <div className="relative w-full ">
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>

              {/* Image */}
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full h-screen object-top object-cover z-0"
              />
            </div>

            <div className="absolute top-0 flex flex-col h-[calc(100vh-100px)] justify-center items-start lg:pl-24 pl-6 text-white left-0 z-30 font-bold space-y-4">
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
                className={`lg:w-1/2 text-gray-500 animate__animated ${
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
