import { createBrowserRouter, Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllCampaign from "../pages/AllCampaign";
import AddNewCampaign from "../pages/AddNewCampaign";
import MyCampaign from "../pages/MyCampaign";
import MyDonation from "../pages/MyDonation";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Details from "../components/Details";
import UpdateCampaign from "../components/UpdateCampaign";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/running-campaigns"),
      },
      {
        path: "/campaigns",
        element: <AllCampaign></AllCampaign>,
        loader: () => fetch("http://localhost:5000/campaigns"),
      },
      {
        path: " /addCampaign",
        element: (
          <PrivateRoute>
            <AddNewCampaign></AddNewCampaign>
          </PrivateRoute>
        ),
      },
      {
        path: "/campaign/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/campaigns/${params.id}`),
      },
      {
        path: "/myCampaign",
        element: <MyCampaign></MyCampaign>,
      },
      {
        path: "/myDonations",
        element: <MyDonation></MyDonation>,
        loader: () => fetch("http://localhost:5000/donations"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/updateCampaign/:id",
        element: <UpdateCampaign></UpdateCampaign>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/campaigns/${params.id}`),
      },
    ],
  },
]);
export default router;
