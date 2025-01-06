import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_URL}/reviews`);
      setReviews(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); // You can adjust the duration or other options
  }, []);
  return (
    <div className="w-11/12 mx-auto my-12" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mt-12">
        {" "}
        <Typewriter
          words={["Testimonials"]}
          loop={true} // Set to true to loop through the words
          cursor
          cursorStyle="_"
          typeSpeed={130} // Adjust typing speed (default is 100)
          deleteSpeed={100} // Adjust delete speed (default is 50)
          delaySpeed={1000} // Delay between typing and deleting (default is 1000)
        />
      </h2>
      <p className="text-center text-gray-500 lg:w-1/2 mb-12 mx-auto">
        The testimonial section highlights user feedback and experiences,
        showcasing reviews and ratings from satisfied customers. It builds trust
        and credibility.
      </p>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <FaQuoteLeft className="text-5xl my-6 text-primary" />
                <h3 className="text-2xl text-primary font-bold">
                  {review.name}
                </h3>
                <p className="py-8 text-center lg:w-1/2">{review.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
