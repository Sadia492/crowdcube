import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

export default function Navbar() {
  const { user, signOutUser } = useContext(authContext);
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const links = (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/campaigns">
        <li>All Campaign</li>
      </NavLink>
      <NavLink to=" /addCampaign">
        <li>Add New Campaign</li>
      </NavLink>
      <NavLink to="/myCampaign">
        <li>My Campaign</li>
      </NavLink>
      <NavLink to="/myDonations">
        <li>My Donation</li>
      </NavLink>
    </>
  );

  const [isHovered, setIsHovered] = useState(false);

  const handleSignOut = () => {
    signOutUser().then(() => {});
  };

  return (
    <div
      className={`w-full fixed top-0 z-10 transition-all duration-500 ease-in-out ${
        pathname === "/"
          ? isScrolled
            ? "bg-secondary/50 backdrop-blur-md text-white" // Background color when scrolled on homepage
            : "bg-transparent" // Transparent background on homepage
          : "bg-secondary/45 backdrop-blur-xl" // Non-transparent background on other pages
      }`}
    >
      <div className="navbar lg:w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" text-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content !text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-3xl flex items-center justify-center font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
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
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-white gap-6 px-1 font-semibold ">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <div
                className="relative flex items-center pr-12 "
                onMouseEnter={() => setIsHovered(true)}
              >
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="w-12 h-12 rounded-full object-cover cursor-pointer"
                />
              </div>

              {isHovered && (
                <div
                  className="absolute top-14 text-center right-0 bg-white border shadow-lg w-60 p-4 rounded-md !z-50"
                  onClick={(e) => e.stopPropagation()} // Prevent click event from propagating
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <p className="font-bold mb-2 text-black">
                    {user.displayName || "Anonymous"}
                  </p>

                  <Link
                    onClick={handleSignOut}
                    to="/login"
                    className="btn bg-gradient-to-r from-primary to-secondary text-white"
                  >
                    Log Out
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="space-x-1">
              <Link
                to="/login"
                className="btn bg-gradient-to-r from-primary to-secondary text-white"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn bg-gradient-to-r from-primary to-secondary text-white"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
