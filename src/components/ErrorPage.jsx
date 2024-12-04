import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="h-screen flex space-y-4 flex-col justify-center items-center">
      <h1 className="text-5xl font-extrabold text-center">404</h1>
      <h3 className="text-2xl font-bold text-center">Page Not Fount</h3>
      <Link className="btn" to="/">
        Go to Home
      </Link>
    </div>
  );
}
