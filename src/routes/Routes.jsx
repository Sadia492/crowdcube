import { createBrowserRouter, Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      // {
      //   path: "about",
      //   element: <div>About</div>,
      // },
    ],
  },
]);
export default router;
