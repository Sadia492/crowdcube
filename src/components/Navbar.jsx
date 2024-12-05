import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

export default function Navbar() {
  const { user, signOutUser } = useContext(authContext);
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    signOutUser().then(() => {
      console.log("user sign out successful");
    });
  };

  return (
    <div
      className={`${
        pathname !== "/" ? "bg-primary/40 backdrop-blur-md" : ""
      } w-full fixed top-0 z-10 transition-all duration-500 ease-in-out  ${
        isScrolled
          ? "bg-primary/40 backdrop-blur-md text-white"
          : "bg-transparent "
      }`}
    >
      <div className="navbar w-11/12  mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
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
                className="relative flex items-center"
                onMouseEnter={() => setIsHovered(true)}
              >
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="w-12 h-12 rounded-full cursor-pointer"
                />
              </div>

              {isHovered && (
                <div
                  className="absolute top-14 text-center right-0 bg-white border shadow-lg w-60 p-4 rounded-md z-50"
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
