import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../assets/404 error with people holding the numbers-amico.png";

export default function ErrorPage() {
  return (
    <div className="h-screen flex space-y-4 flex-col justify-center items-center">
      <img className="w-4/12 mx-auto" src={errorImg} alt="" />

      <h3 className="text-2xl font-bold text-center">Page Not Fount</h3>
      <Link className="btn" to="/">
        Go to Home
      </Link>
    </div>
  );
}
