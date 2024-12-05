import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  const { user } = useContext(authContext);
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-284px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}
