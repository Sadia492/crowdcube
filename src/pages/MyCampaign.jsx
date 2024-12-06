import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function MyCampaign() {
  const { user } = useContext(authContext);
  const [userCampaigns, setUserCampaigns] = useState();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/user-campaigns/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setUserCampaigns(data);
        });
    }
  }, [user]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/campaigns/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = userCampaigns.filter(
                (campaign) => campaign._id !== id
              );
              setUserCampaigns(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold text-center">My campaigns</h2>
      <p className="text-center text-gray-500 lg:w-1/2 mb-12 mx-auto">
        View and manage the campaigns you've created to make a real difference.
        Your initiatives are just a few steps away from inspiring others and
        driving impactful change.
      </p>

      <div className="flex gap-2 w-11/12 mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="none"
          viewBox="0 0 200 200"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          className="rotate-infinite"
        >
          <path
            fill='url("#SvgjsLinearGradient1257")'
            d="M100 200c-8.333 0-15.278-2.691-20.833-8.073-5.556-5.382-8.334-11.892-8.334-19.531 0-4.34.868-8.247 2.605-11.719 1.736-3.472 4.774-7.292 9.114-11.458 4.514-4.167 8.073-8.073 10.677-11.719 2.778-3.819 4.167-7.118 4.167-9.896v-9.375c-3.82-.868-7.205-2.604-10.156-5.208-2.778-2.778-4.601-6.077-5.47-9.896h-9.374c-2.952 0-6.424 1.389-10.417 4.167-3.993 2.777-7.812 6.163-11.458 10.156-3.646 3.993-7.292 6.944-10.938 8.854-3.472 1.91-7.465 2.865-11.979 2.865-7.812 0-14.41-2.778-19.791-8.334C2.604 115.278 0 108.333 0 100c0-8.333 2.604-15.278 7.813-20.833 5.381-5.556 11.979-8.334 19.791-8.334 7.292 0 13.542 2.605 18.75 7.813 5.209 5.208 9.896 9.635 14.063 13.281 4.166 3.646 8.16 5.469 11.979 5.469h9.375c.868-3.993 2.69-7.292 5.469-9.896 2.951-2.778 6.336-4.514 10.156-5.208v-9.375c0-4.514-3.472-10.243-10.417-17.188L81.51 50.26c-7.118-7.118-10.677-14.67-10.677-22.656 0-7.812 2.778-14.323 8.334-19.531C84.896 2.69 91.84 0 100 0c8.333 0 15.278 2.691 20.833 8.073 5.556 5.382 8.334 11.892 8.334 19.531 0 8.854-4.341 17.188-13.021 25-8.681 7.986-13.021 14.757-13.021 20.313v9.375c3.993.694 7.292 2.43 9.896 5.208 2.778 2.604 4.514 5.903 5.208 9.896h9.375c5.903 0 12.674-4.427 20.313-13.281 7.812-8.855 15.972-13.282 24.479-13.282 7.812 0 14.323 2.865 19.531 8.594C197.309 84.983 200 91.84 200 100c0 8.333-2.691 15.278-8.073 20.833-5.382 5.556-11.892 8.334-19.531 8.334-7.292 0-13.455-2.518-18.49-7.552-5.034-5.035-9.722-9.375-14.062-13.021-4.341-3.646-8.42-5.469-12.24-5.469h-9.375c-1.389 8.333-6.423 13.368-15.104 15.104v9.375c0 5.208 4.34 11.893 13.021 20.052 8.68 8.16 13.021 16.406 13.021 24.74 0 7.812-2.865 14.323-8.594 19.531C115.017 197.309 108.16 200 100 200Z"
          ></path>
          <defs>
            <linearGradient
              gradientTransform="rotate(0 0.5 0.5)"
              id="SvgjsLinearGradient1257"
            >
              <stop
                stop-opacity=" 1"
                stop-color="rgba(136, 54, 119)"
                offset="0"
              ></stop>
              <stop
                stop-opacity=" 1"
                stop-color="rgba(255, 149, 140)"
                offset="1"
              ></stop>
            </linearGradient>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="none"
          viewBox="0 0 200 200"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          className="rotate-infinite"
        >
          <path
            fill='url("#SvgjsLinearGradient1257")'
            d="M100 200c-8.333 0-15.278-2.691-20.833-8.073-5.556-5.382-8.334-11.892-8.334-19.531 0-4.34.868-8.247 2.605-11.719 1.736-3.472 4.774-7.292 9.114-11.458 4.514-4.167 8.073-8.073 10.677-11.719 2.778-3.819 4.167-7.118 4.167-9.896v-9.375c-3.82-.868-7.205-2.604-10.156-5.208-2.778-2.778-4.601-6.077-5.47-9.896h-9.374c-2.952 0-6.424 1.389-10.417 4.167-3.993 2.777-7.812 6.163-11.458 10.156-3.646 3.993-7.292 6.944-10.938 8.854-3.472 1.91-7.465 2.865-11.979 2.865-7.812 0-14.41-2.778-19.791-8.334C2.604 115.278 0 108.333 0 100c0-8.333 2.604-15.278 7.813-20.833 5.381-5.556 11.979-8.334 19.791-8.334 7.292 0 13.542 2.605 18.75 7.813 5.209 5.208 9.896 9.635 14.063 13.281 4.166 3.646 8.16 5.469 11.979 5.469h9.375c.868-3.993 2.69-7.292 5.469-9.896 2.951-2.778 6.336-4.514 10.156-5.208v-9.375c0-4.514-3.472-10.243-10.417-17.188L81.51 50.26c-7.118-7.118-10.677-14.67-10.677-22.656 0-7.812 2.778-14.323 8.334-19.531C84.896 2.69 91.84 0 100 0c8.333 0 15.278 2.691 20.833 8.073 5.556 5.382 8.334 11.892 8.334 19.531 0 8.854-4.341 17.188-13.021 25-8.681 7.986-13.021 14.757-13.021 20.313v9.375c3.993.694 7.292 2.43 9.896 5.208 2.778 2.604 4.514 5.903 5.208 9.896h9.375c5.903 0 12.674-4.427 20.313-13.281 7.812-8.855 15.972-13.282 24.479-13.282 7.812 0 14.323 2.865 19.531 8.594C197.309 84.983 200 91.84 200 100c0 8.333-2.691 15.278-8.073 20.833-5.382 5.556-11.892 8.334-19.531 8.334-7.292 0-13.455-2.518-18.49-7.552-5.034-5.035-9.722-9.375-14.062-13.021-4.341-3.646-8.42-5.469-12.24-5.469h-9.375c-1.389 8.333-6.423 13.368-15.104 15.104v9.375c0 5.208 4.34 11.893 13.021 20.052 8.68 8.16 13.021 16.406 13.021 24.74 0 7.812-2.865 14.323-8.594 19.531C115.017 197.309 108.16 200 100 200Z"
          ></path>
          <defs>
            <linearGradient
              gradientTransform="rotate(0 0.5 0.5)"
              id="SvgjsLinearGradient1257"
            >
              <stop
                stop-opacity=" 1"
                stop-color="rgba(136, 54, 119)"
                offset="0"
              ></stop>
              <stop
                stop-opacity=" 1"
                stop-color="rgba(255, 149, 140)"
                offset="1"
              ></stop>
            </linearGradient>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="none"
          viewBox="0 0 200 200"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          className="rotate-infinite"
        >
          <path
            fill='url("#SvgjsLinearGradient1257")'
            d="M100 200c-8.333 0-15.278-2.691-20.833-8.073-5.556-5.382-8.334-11.892-8.334-19.531 0-4.34.868-8.247 2.605-11.719 1.736-3.472 4.774-7.292 9.114-11.458 4.514-4.167 8.073-8.073 10.677-11.719 2.778-3.819 4.167-7.118 4.167-9.896v-9.375c-3.82-.868-7.205-2.604-10.156-5.208-2.778-2.778-4.601-6.077-5.47-9.896h-9.374c-2.952 0-6.424 1.389-10.417 4.167-3.993 2.777-7.812 6.163-11.458 10.156-3.646 3.993-7.292 6.944-10.938 8.854-3.472 1.91-7.465 2.865-11.979 2.865-7.812 0-14.41-2.778-19.791-8.334C2.604 115.278 0 108.333 0 100c0-8.333 2.604-15.278 7.813-20.833 5.381-5.556 11.979-8.334 19.791-8.334 7.292 0 13.542 2.605 18.75 7.813 5.209 5.208 9.896 9.635 14.063 13.281 4.166 3.646 8.16 5.469 11.979 5.469h9.375c.868-3.993 2.69-7.292 5.469-9.896 2.951-2.778 6.336-4.514 10.156-5.208v-9.375c0-4.514-3.472-10.243-10.417-17.188L81.51 50.26c-7.118-7.118-10.677-14.67-10.677-22.656 0-7.812 2.778-14.323 8.334-19.531C84.896 2.69 91.84 0 100 0c8.333 0 15.278 2.691 20.833 8.073 5.556 5.382 8.334 11.892 8.334 19.531 0 8.854-4.341 17.188-13.021 25-8.681 7.986-13.021 14.757-13.021 20.313v9.375c3.993.694 7.292 2.43 9.896 5.208 2.778 2.604 4.514 5.903 5.208 9.896h9.375c5.903 0 12.674-4.427 20.313-13.281 7.812-8.855 15.972-13.282 24.479-13.282 7.812 0 14.323 2.865 19.531 8.594C197.309 84.983 200 91.84 200 100c0 8.333-2.691 15.278-8.073 20.833-5.382 5.556-11.892 8.334-19.531 8.334-7.292 0-13.455-2.518-18.49-7.552-5.034-5.035-9.722-9.375-14.062-13.021-4.341-3.646-8.42-5.469-12.24-5.469h-9.375c-1.389 8.333-6.423 13.368-15.104 15.104v9.375c0 5.208 4.34 11.893 13.021 20.052 8.68 8.16 13.021 16.406 13.021 24.74 0 7.812-2.865 14.323-8.594 19.531C115.017 197.309 108.16 200 100 200Z"
          ></path>
          <defs>
            <linearGradient
              gradientTransform="rotate(0 0.5 0.5)"
              id="SvgjsLinearGradient1257"
            >
              <stop
                stop-opacity=" 1"
                stop-color="rgba(136, 54, 119)"
                offset="0"
              ></stop>
              <stop
                stop-opacity=" 1"
                stop-color="rgba(255, 149, 140)"
                offset="1"
              ></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="overflow-x-auto  lg:w-11/12 mx-auto mt-8">
        <table className="table">
          {/* head */}
          <thead className="bg-[url('https://i.ibb.co.com/7KqmCf5/triangles-1430105-1280.jpg')] bg-no-repeat bg-left bg-cover font-extrabold text-white">
            <tr className="text-lg">
              <th className="hidden sm:block"></th>
              <th className="lg:p-4 p-0">Campaign Title</th>
              <th className="hidden lg:block">Campaign Type</th>
              <th>Amount</th>
              <th className="hidden lg:block">Deadline</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="bg-gradient-to-br from-secondary font-medium to-primary text-white">
            {userCampaigns &&
              userCampaigns.map((campaign, idx) => (
                <tr key={campaign._id} className="hover:text-primary">
                  <th className="lg:px-16 hidden sm:block p-0">{idx + 1}</th>
                  <td>{campaign.title}</td>
                  <td className="hidden lg:block">{campaign.type}</td>
                  <td>{campaign.amount}</td>
                  <td className="hidden lg:block">{campaign.deadline}</td>
                  <td>
                    <Link to={`/updateCampaign/${campaign._id}`}>
                      <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                        Update
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(campaign._id)}
                      className="btn bg-gradient-to-r from-primary to-secondary text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
