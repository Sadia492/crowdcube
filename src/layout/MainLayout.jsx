import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";

export default function MainLayout() {
  const { user } = useContext(authContext);
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-220px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}
