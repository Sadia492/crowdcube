import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="mt-12 bg-neutral text-neutral-content">
      <div className="bg-neutral text-neutral-content p-10 w-11/12 mx-auto">
        <div className="footer justify-between border-b pb-6 mb-6">
          <div>
            <div>
              <a className="text-3xl flex items-center justify-start font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 200 200"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:svgjs="http://svgjs.dev/svgjs"
                >
                  <path
                    fill='url("#SvgjsLinearGradient1134")'
                    d="M165.963 134.037c-5.467 5.467-14.332 5.467-19.799 0l-24.137-24.138c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L190.101 90.1c5.467 5.468 5.467 14.332 0 19.799l-24.138 24.138Zm-112.127 0c-5.467 5.467-14.332 5.467-19.8 0L9.9 109.899c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L77.973 90.1c5.468 5.468 5.468 14.332 0 19.799l-24.137 24.138ZM109.9 190.1c-5.468 5.468-14.332 5.468-19.8 0l-24.137-24.137c-5.467-5.467-5.467-14.332 0-19.799l24.138-24.137c5.467-5.468 14.331-5.468 19.799 0l24.137 24.137c5.467 5.467 5.467 14.332 0 19.799L109.9 190.1Zm0-112.127c-5.468 5.468-14.332 5.468-19.8 0L65.963 53.836c-5.467-5.468-5.467-14.332 0-19.8L90.101 9.9c5.467-5.467 14.331-5.467 19.799 0l24.137 24.138c5.467 5.467 5.467 14.331 0 19.799L109.9 77.973Z"
                  ></path>
                  <defs>
                    <linearGradient
                      gradientTransform="rotate(0 0.5 0.5)"
                      id="SvgjsLinearGradient1134"
                    >
                      <stop
                        stop-opacity=" 1"
                        stop-color="rgba(136, 54, 119)"
                        offset="0"
                      ></stop>
                      <stop
                        stop-opacity=" 1"
                        stop-color="rgba(255, 149, 140)"
                        offset="1"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>{" "}
                Crowdcube
              </a>
              <p className="w-3/5 text-justify">
                Powered by Crowdcube, the leading crowdfunding platform that
                helps turn ideas into reality
              </p>
            </div>
            <div></div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <nav>
              <h2 className="font-bold text-xl mb-4">Donate</h2>
              <ul className="">
                <a href="">Education</a>
                <a href="" className="ml-2">
                  Social
                </a>
                <br />
                <a href="">Medicine</a>
                <a href="" className="ml-2">
                  Disaster
                </a>
              </ul>
            </nav>
            <nav>
              <h2 className="font-bold text-xl mb-4">Help</h2>
              <ul className="">
                <a href="">FAQ</a>
                <a href="" className="ml-2">
                  PrivacyPolicy
                </a>
                <br />
                <a href="">Accessibility</a>
                <a href="" className="ml-2">
                  Contact Us
                </a>
              </ul>
            </nav>
            <nav>
              <h2 className="font-bold text-xl mb-4">Company</h2>
              <ul className="">
                <a href="">About Us</a>
                <a href="" className="ml-2">
                  Careers
                </a>
                <br />
                <a href="">Services</a>
                <a href="" className="ml-2">
                  Pricing
                </a>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 justify-between">
          <div>
            <p>&copy;Crowdcube 2024</p>
            <p>All rights reserved</p>
          </div>
          <div className="flex flex-wrap  gap-4">
            <button className="flex border rounded-full justify-center items-center px-4 py-2 gap-2">
              <p className="text-white text-2xl">
                <FaInstagram />
              </p>
              Instagram
            </button>
            <button className="flex border rounded-full justify-center items-center px-4 py-2 gap-2">
              <p className="text-white text-2xl">
                <FaFacebook />
              </p>
              Facebook
            </button>
            <button className="flex border rounded-full justify-center items-center px-4 py-2 gap-2">
              <p className="text-white text-2xl">
                <FaXTwitter />
              </p>
              Twitter
            </button>
            <button className="flex border rounded-full justify-center items-center px-4 py-2 gap-2">
              <p className="text-white text-2xl">
                <FaLinkedin />
              </p>
              Linkedin
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
