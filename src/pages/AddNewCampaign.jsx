import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

export default function AddNewCampaign() {
  const { user } = useContext(authContext);

  return (
    <div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form className="card-body grid grid-cols-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="image URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Campaign Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Campaign title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Campaign type</span>
            </label>
            <select name="" className="input input-bordered" id="">
              <option value="personal issue">personal issue</option>
              <option value="startup">startup</option>
              <option value="business">business</option>
              <option value="creative ideas">creative ideas</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Minimum Donation Amount</span>
            </label>
            <input
              type="number"
              name="amount"
              placeholder="Minimum Donation Amount"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              name="amount"
              placeholder="Minimum Donation Amount"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="text"
              name="email"
              value={user?.email}
              placeholder=""
              className="input input-bordered"
              required
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={user?.displayName}
              placeholder=""
              className="input input-bordered"
              required
              readOnly
            />
          </div>
          <div className="form-control mt-6 col-span-2">
            <button className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}
