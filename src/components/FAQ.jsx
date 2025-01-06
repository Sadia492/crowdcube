import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import humanImg from "../assets/human.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function FAQ() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); // You can adjust the duration or other options
  }, []);
  return (
    <div className="w-11/12 mx-auto mt-12" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
        {" "}
        <Typewriter
          words={["Frequently Asked Questions"]}
          loop={true} // Set to true to loop through the words
          cursor
          cursorStyle="_"
          typeSpeed={130} // Adjust typing speed (default is 100)
          deleteSpeed={100} // Adjust delete speed (default is 50)
          delaySpeed={1000} // Delay between typing and deleting (default is 1000)
        />
      </h2>
      <p className="text-center text-gray-500 lg:w-1/2 mb-12 mx-auto">
        Got questions? We've got answers! Browse through our frequently asked
        questions to find helpful information and make your experience smoother.
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-12">
        <div className="flex-1 w-full justify-center items-center flex">
          <img className="w-[500px] object-cover" src={humanImg} alt="" />
        </div>
        <div className="flex-1 space-y-6">
          <div className="collapse collapse-plus bg-gradient-to-br from-secondary to-primary text-white">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              ❓ What is crowdfunding?
            </div>
            <div className="collapse-content">
              <p>
                Crowdfunding is a way to raise funds for projects, ideas, or
                causes by getting support from a large number of people online.
                🌍💸 It’s a simple and powerful way to turn dreams into reality
                with the help of a community!
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 bg-gradient-to-br from-secondary to-primary text-white">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              🚀 How do I start my own campaign?
            </div>
            <div className="collapse-content">
              <p>
                Sign up, click "Start a Campaign," and fill out your project
                details, including images and goals. Then share it with your
                friends and family to spread the word! 😊🎯 You’ll have all the
                tools to make your campaign successful.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 bg-gradient-to-br from-secondary to-primary text-white">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              🤔 How can I donate to a campaign?
            </div>
            <div className="collapse-content">
              <p>
                Browse the campaigns, click on "Donate," choose the amount you’d
                like to give, and complete your payment securely. 💖✨ You can
                also leave a message of encouragement for the campaign owner.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 bg-gradient-to-br from-secondary to-primary text-white">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              🛡️ Is my payment information secure?
            </div>
            <div className="collapse-content">
              <p>
                Yes! We use industry-standard encrypted payment gateways to
                ensure your transactions are safe and protected. 🔒💳 Your
                security is our top priority at every step.
              </p>
            </div>
          </div>
          {/* <div className="collapse collapse-plus bg-base-200 bg-gradient-to-br from-secondary to-primary text-white">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              🕒 How long does it take for funds to be transferred?
            </div>
            <div className="collapse-content">
              <p>
                Funds are typically processed and transferred within 7–10
                business days after the campaign ends. ✅💵 This allows time for
                verification and ensures safe delivery to the campaign owner.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
