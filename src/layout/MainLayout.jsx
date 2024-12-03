import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  const { user } = useContext(authContext);
  return (
    <div className="w-4/5 mx-auto">
      <Navbar></Navbar>

      <Outlet></Outlet>
    </div>
  );
}
