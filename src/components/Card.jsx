import React from "react";
import { Link } from "react-router-dom";

export default function Card({ campaign }) {
  const { _id, image, title, description, type, amount, deadline } =
    campaign || {};
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl border-2 border-primary">
        <figure className="flex-1">
          <img
            className="w-full h-96 object-cover object-center"
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="card-body flex-1">
          <h2 className="card-title font-bold text-2xl">{title}</h2>
          <p>{description}</p>
          <p>
            <span className="font-bold">Campaign Type: </span>
            {type}
          </p>
          <p>
            <span className="font-bold">Deadline: </span>
            {deadline}
          </p>
          <p>
            <span className="font-bold">Minimum donation amount: </span>
            {amount}$
          </p>
          <div className="card-actions justify-end">
            <Link to={`/campaign/${_id}`}>
              <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
