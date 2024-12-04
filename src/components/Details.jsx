import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

export default function Details() {
  const campaign = useLoaderData();
  const {
    _id,
    image,
    name,
    email,
    title,
    description,
    type,
    amount,
    deadline,
  } = campaign;
  const data = {
    image,
    name,
    email,
    title,
    description,
    type,
    amount,
    deadline,
  };
  console.log(data);

  const handleDonate = () => {
    fetch("http://localhost:5000/donations", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Donation successful");
        }
      });
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>{type}</p>
        <p>{amount}</p>
        <p>{deadline}</p>
        <p>{name}</p>
        <p>{email}</p>
        <div className="card-actions justify-end">
          <button onClick={handleDonate} className="btn btn-primary">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}
