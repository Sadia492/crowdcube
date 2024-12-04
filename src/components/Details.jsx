import React from "react";
import { useLoaderData } from "react-router-dom";

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
          <button className="btn btn-primary">Donate</button>
        </div>
      </div>
    </div>
  );
}
