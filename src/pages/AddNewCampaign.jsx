import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../hooks/useAxiosSecure";

export default function AddNewCampaign() {
  const { user } = useContext(authContext);
  const axiosSecure = useAxiosSecure();
  const handleSubmit = async (e) => {
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
    const formData = {
      image,
      title,
      description,
      type,
      amount,
      deadline,
      email,
      name,
    };
    const { data } = await axiosSecure.post("/campaigns", formData);
    if (data.insertedId) {
      Swal.fire({
        title: "Added Campaign",
        text: "Successfully added the campaign",
        icon: "success",
      });
    }
    form.reset();
  };
  return (
    <div className="mt-12 bg-[url('https://i.ibb.co.com/MsBQY5f/cool-background.png')] bg-no-repeat bg-cover">
      <Helmet>
        <title>Crowdcube | Add Campaign</title>
      </Helmet>
      <div className="card lg:px-16 py-20 w-11/12 mx-auto ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 409.6 409.6"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          className="absolute opacity-100 right-5 top-10 -rotate-45"
        >
          <path
            d="M409.602 341.336c0 37.7-30.567 68.266-68.266 68.266-37.703 0-68.266-30.567-68.266-68.266 0-37.703 30.563-68.266 68.266-68.266 37.7 0 68.266 30.563 68.266 68.266zM324.27 179.2c0 32.991-26.743 59.734-59.735 59.734-32.992 0-59.734-26.743-59.734-59.735 0-32.988 26.742-59.734 59.734-59.734 32.992 0 59.735 26.746 59.735 59.734zm-119.47 128c0 56.554-45.847 102.402-102.402 102.402C45.848 409.602 0 363.754 0 307.199c0-56.554 45.848-102.398 102.398-102.398 56.555 0 102.403 45.844 102.403 102.398zM170.672 85.336c0 47.129-38.207 85.336-85.336 85.336S0 132.465 0 85.336 38.207 0 85.336 0s85.336 38.207 85.336 85.336zM409.602 51.2c0 28.277-22.926 51.198-51.204 51.198-28.277 0-51.199-22.921-51.199-51.199C307.2 22.922 330.121 0 358.4 0c28.277 0 51.203 22.922 51.203 51.2zm-17.071 170.663c0 9.426-7.64 17.067-17.066 17.067-9.426 0-17.067-7.64-17.067-17.067 0-9.422 7.641-17.062 17.067-17.062s17.066 7.64 17.066 17.062zM264.535 59.734c0 14.141-11.46 25.602-25.601 25.602-14.137 0-25.598-11.461-25.598-25.602 0-14.136 11.46-25.597 25.598-25.597 14.14 0 25.601 11.46 25.601 25.597zm0 0"
            fill="rgba(255, 149, 140, 1)"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          viewBox="0 0 409.6 409.6"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          className="absolute opacity-100 -left-4 bottom-4 -rotate-45"
        >
          <path
            d="M409.602 341.336c0 37.7-30.567 68.266-68.266 68.266-37.703 0-68.266-30.567-68.266-68.266 0-37.703 30.563-68.266 68.266-68.266 37.7 0 68.266 30.563 68.266 68.266zM324.27 179.2c0 32.991-26.743 59.734-59.735 59.734-32.992 0-59.734-26.743-59.734-59.735 0-32.988 26.742-59.734 59.734-59.734 32.992 0 59.735 26.746 59.735 59.734zm-119.47 128c0 56.554-45.847 102.402-102.402 102.402C45.848 409.602 0 363.754 0 307.199c0-56.554 45.848-102.398 102.398-102.398 56.555 0 102.403 45.844 102.403 102.398zM170.672 85.336c0 47.129-38.207 85.336-85.336 85.336S0 132.465 0 85.336 38.207 0 85.336 0s85.336 38.207 85.336 85.336zM409.602 51.2c0 28.277-22.926 51.198-51.204 51.198-28.277 0-51.199-22.921-51.199-51.199C307.2 22.922 330.121 0 358.4 0c28.277 0 51.203 22.922 51.203 51.2zm-17.071 170.663c0 9.426-7.64 17.067-17.066 17.067-9.426 0-17.067-7.64-17.067-17.067 0-9.422 7.641-17.062 17.067-17.062s17.066 7.64 17.066 17.062zM264.535 59.734c0 14.141-11.46 25.602-25.601 25.602-14.137 0-25.598-11.461-25.598-25.602 0-14.136 11.46-25.597 25.598-25.597 14.14 0 25.601 11.46 25.601 25.597zm0 0"
            fill="rgba(255, 149, 140, 1)"
          ></path>
        </svg>

        <h2 className="text-center text-3xl font-bold text-white">
          Add New Campaign
        </h2>
        <form
          onSubmit={handleSubmit}
          className="card-body grid !grid-cols-1 lg:!grid-cols-2 gap-x-6"
        >
          <div className="form-control w-full lg:w-auto">
            <label className="label">
              <span className="label-text font-bold">Image</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="image URL"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Campaign Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Campaign title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Campaign type</span>
            </label>
            <select name="type" className="input input-bordered" id="" required>
              <option value="">Select Your Campaign Type</option>
              <option value="personal issue">personal issue</option>
              <option value="startup">startup</option>
              <option value="business">business</option>
              <option value="creative ideas">creative ideas</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">
                Minimum Donation Amount
              </span>
            </label>
            <input
              type="number"
              name="amount"
              placeholder="Minimum Donation Amount"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Deadline</span>
            </label>
            <input
              type="date"
              name="deadline"
              placeholder="Minimum Donation Amount"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">User Email</span>
            </label>
            <input
              type="text"
              name="email"
              value={user?.email || ""}
              placeholder=""
              className="input input-bordered"
              required
              readOnly
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">User Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={user?.displayName || ""}
              placeholder=""
              className="input input-bordered"
              required
              readOnly
            />
          </div>
          <div className="form-control mt-6 lg:col-span-2">
            <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
