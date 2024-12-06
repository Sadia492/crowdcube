import React from "react";

export default function DonationCard({ campaign }) {
  const { _id, image, title, description, type, amount, deadline } =
    campaign || {};
  return (
    <div>
      <div className="card bg-base-100 shadow-2xl h-full">
        <figure className="px-12 pt-12 w-full">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl w-full h-full object-cover"
          />
        </figure>
        <div className="card-body px-12">
          <h2 className="card-title font-bold text-xl">{title}</h2>
          <p>{description}</p>
          <p>
            <span className="font-bold">donation amount: </span>
            {amount}$
          </p>
          <div class="badge bg-primary text-white p-3">{type}</div>
        </div>
      </div>
    </div>
  );
}
