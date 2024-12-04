import React from "react";
import { Link } from "react-router-dom";

export default function Card({ campaign }) {
  const { _id, image, title, description, type, amount, deadline } = campaign;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>{type}</p>
          <p>{amount}</p>
          <p>{deadline}</p>
          <div className="card-actions justify-end">
            <Link to={`/campaign/${_id}`}>
              <button className="btn btn-primary">See More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
