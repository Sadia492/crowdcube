import React from "react";

export default function DonationCard({ campaign }) {
  const { _id, image, title, description, type, amount, deadline } =
    campaign || {};
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>{type}</p>
          <p>{amount}</p>
        </div>
      </div>
    </div>
  );
}
