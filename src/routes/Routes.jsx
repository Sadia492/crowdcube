import { createBrowserRouter, Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllCampaign from "../pages/AllCampaign";
import AddNewCampaign from "../pages/AddNewCampaign";
import MyCampaign from "../pages/MyCampaign";
import MyDonation from "../pages/MyDonation";
import Login from "../components/Login";
import Register from "../components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-campaign",
        element: <AllCampaign></AllCampaign>,
      },
      {
        path: "/add-new-campaign",
        element: <AddNewCampaign></AddNewCampaign>,
      },
      {
        path: "/my-campaign",
        element: <MyCampaign></MyCampaign>,
      },
      {
        path: "/my-donation",
        element: <MyDonation></MyDonation>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
