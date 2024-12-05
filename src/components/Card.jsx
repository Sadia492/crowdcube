import React from "react";
import { Link } from "react-router-dom";

export default function Card({ campaign }) {
  const { _id, image, title, description, type, amount, deadline } =
    campaign || {};
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl border-2 border-primary">
        <figure>
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <span className="font-bold">Campaign Title:</span>
            {title}
          </h2>
          <p>
            <span className="font-bold">Description: </span>
            {description}
          </p>
          <p>
            <span className="font-bold">Campaign Type:</span>
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
