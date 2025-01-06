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
  console.log(campaign);

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
    qualities,
    impact,
    organizer_bio,
    location,
  } = campaign || {};

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
    <div>
      <Helmet>
        <title>Crowdcube | Details</title>
      </Helmet>
      <div className="flex lg:flex-row flex-col rounded-3xl mb-20 bg-base-100 gap-8 justify-center items-center shadow-xl w-11/12 mx-auto mt-20">
        <figure className="flex-1 p-4">
          <img className="w-full rounded-3xl" src={image} alt="Album" />
        </figure>
        <div className="flex-1 p-4">
          <h2 className="text-3xl font-bold">{title}</h2>
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
            <p>
              <span className="font-bold">User's Bio: </span>
              {organizer_bio}
            </p>
          </div>

          <div className="space-x-2 my-4 flex flex-wrap">
            <div className="badge bg-primary text-white p-3">{type}</div>
            <div className="badge bg-secondary text-white p-3">
              Deadline: {deadline}
            </div>
            <div className="badge bg-primary text-white p-3">
              location: {location}
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

      {/* Additional Fields Below the Card */}
      <div className="w-11/12 mx-auto mt-8">
        {/* Impact Section */}
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-4"></h3>
          <p className="text-gray-700 font-bold">{description}</p>
        </div>
        {/* Qualities Section */}
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-4">
            Key Qualities of the Campaign
          </h3>
          <p className="text-gray-700">
            {qualities.map((quality) => (
              <li>{quality}</li>
            ))}
          </p>
        </div>

        {/* Impact Section */}
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-4">Impact of the Campaign</h3>
          <p className="text-gray-700">{impact}</p>
        </div>
      </div>
    </div>
  );
}
