import React from "react";
import { Link } from "react-router-dom";

export default function AllCard({ campaign }) {
  const { _id, image, title, description, type, amount, deadline } =
    campaign || {};
  return (
    <div>
      <div className="card bg-base-100 shadow-xl h-full">
        <figure className="p-6">
          <img src={image} alt="Shoes" className="rounded-xl h-44 w-full" />
        </figure>
        <div className="card-body pt-0 ">
          <h2 className="card-title">{title}</h2>
          <div className="flex flex-col justify-between">
            <p className="font-medium">{description.substring(0, 80)}...</p>
            <div className="badge bg-primary text-white ml-auto">{amount}$</div>
          </div>
          <Link to={`/campaign/${_id}`}>
            <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
