import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { format } from "date-fns";
import { authContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../hooks/useAxiosSecure";

export default function Details() {
  const campaign = useLoaderData();
  const axiosSecure = useAxiosSecure();
  // const { user } = useContext(authContext);
  const {
    _id,
    image,
    title,
    description,
    type,
    amount,
    deadline,
    name,
    email,
  } = campaign;
  // const { displayName: name, email } = user || {};
  const formData = {
    image,
    title,
    description,
    type,
    amount,
    deadline,
    name,
    email,
  };

  const handleDonate = async () => {
    const currentTime = format(new Date(), "yyyy-MM-dd");

    if (currentTime <= formData.deadline) {
      const { data } = await axiosSecure.post("/donations", formData);
      if (data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Donation Successful",
          text: "You have Successfully donated in this campaign.",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Deadline passed",
        text: "The donation period has ended. Please try again next time.",
      });
    }
  };

  return (
    <div className="flex lg:flex-row flex-col rounded-3xl mb-20 bg-base-100 gap-8 justify-center items-center shadow-xl w-11/12 mx-auto mt-20">
      <Helmet>
        <title>Crowdcube | Details</title>
      </Helmet>
      <figure className="flex-1 p-4">
        <img className="w-full rounded-3xl" src={image} alt="Album" />
      </figure>
      <div className="flex-1 p-4">
        <h2 className="text-3xl font-bold ">{title}</h2>
        <p className=" text-gray-500 mb-6 mt-2">{description}</p>

        <p>
          <span className="font-bold">Minimum donation amount: </span>
          {amount}$
        </p>

        <div>
          <h3 className="font-bold text-lg mt-4">Other Info:</h3>
          <p>
            <span className="font-bold">Added By: </span>
            {name}
          </p>
          <p>
            <span className="font-bold">User's Email: </span>
            {email}
          </p>
        </div>

        <div className="space-x-2 my-4">
          <div className="badge bg-primary text-white p-3">{type}</div>
          <div className="badge bg-secondary text-white p-3">
            Deadline: {deadline}
          </div>
        </div>
        <div className="card-actions justify-start">
          <button
            onClick={handleDonate}
            className="btn bg-gradient-to-r mt-3 from-primary to-secondary text-white"
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}
