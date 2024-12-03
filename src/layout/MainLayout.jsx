import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

export default function MainLayout() {
  const { user } = useContext(authContext);
  return (
    <div>
      main layout {user}
      {/* <Outlet></Outlet> */}
    </div>
  );
}
