import React, { useEffect } from "react";
import animationData from "../assets/animation1.json";
import animationData2 from "../assets/animation2.json";
import animationData3 from "../assets/animation3.json";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Features() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); // You can adjust the duration or other options
  }, []);
  return (
    <div data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mt-12">
        {" "}
        <Typewriter
          words={["Key Features"]}
          loop={true} // Set to true to loop through the words
          cursor
          cursorStyle="_"
          typeSpeed={130} // Adjust typing speed (default is 100)
          deleteSpeed={100} // Adjust delete speed (default is 50)
          delaySpeed={1000} // Delay between typing and deleting (default is 1000)
        />
      </h2>
      <p className="text-center text-gray-500 lg:w-1/2 mb-12 mx-auto">
        Discover the powerful features of our platform that drive change and
        connect people. Together, we can ignite impact, spread awareness, and
        build a global network of support for those in need.
      </p>
      <div className="bg-[url('https://i.ibb.co.com/MsBQY5f/cool-background.png')] bg-no-repeat bg-cover p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto ">
          <div className="bg-base-100 rounded-xl p-8">
            <div className="text-center flex justify-center items-center">
              <Lottie
                style={{ width: "50%", height: "50%" }}
                animationData={animationData}
                loop={true}
              />
            </div>

            <h2 className="font-bold text-2xl">Ignite Impact</h2>
            <p className="text-justify mt-2 text-gray-500 font-medium">
              Spark joy by sharing your cause and the positive impact it brings.
              Clearly express how contributions will make a meaningful
              difference
            </p>
          </div>
          <div className="bg-base-100 rounded-xl p-8">
            <div className="text-center flex justify-center items-center">
              <Lottie
                style={{ width: "50%", height: "50%" }}
                animationData={animationData2}
                loop={true}
              />
            </div>
            <h2 className="font-bold text-2xl">Spread The World</h2>
            <p className="text-justify mt-2 text-gray-500 font-medium">
              Leverage the speed of social media and online networks. Share your
              fundraising campaign swiftly across serious platforms
            </p>
          </div>
          <div className="bg-base-100 rounded-xl p-8">
            <div className="text-center flex justify-center items-center">
              <Lottie
                style={{ width: "50%", height: "50%" }}
                animationData={animationData3}
                loop={true}
              />
            </div>
            <h2 className="font-bold text-2xl">Connect Globally</h2>
            <p className="text-justify mt-2 text-gray-500 font-medium">
              Build a strong social network around your coun Encourage
              supporters to share the campaign within their local communities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
