import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

export default function AddNewCampaign() {
  const { user } = useContext(authContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const description = form.description.value;
    const type = form.type.value;
    const amount = form.amount.value;
    const deadline = form.deadline.value;
    const email = form.email.value;
    const name = form.name.value;
    const data = {
      image,
      title,
      description,
      type,
      amount,
      deadline,
      email,
      name,
    };
    console.log(data);
    fetch("http://localhost:5000/campaigns", {
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
          Swal.fire("Successfully added to the campaign");
        }
      });
  };
  return (
    <div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body grid grid-cols-2">
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
            <select name="type" className="input input-bordered" id="">
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
              name="deadline"
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
