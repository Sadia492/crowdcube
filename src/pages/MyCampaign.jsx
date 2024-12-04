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
    <div>
      <h2>My campaigns</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Campaign Title</th>
              <th>Campaign Type</th>
              <th>Amount</th>
              <th>Deadline</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userCampaigns &&
              userCampaigns.map((campaign, idx) => (
                <tr key={campaign._id} className="hover">
                  <th>{idx + 1}</th>
                  <td>{campaign.title}</td>
                  <td>{campaign.type}</td>
                  <td>{campaign.amount}</td>
                  <td>{campaign.deadline}</td>
                  <td>
                    <Link to={`/updateCampaign/${campaign._id}`}>
                      <button className="btn">Update</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(campaign._id)}
                      className="btn"
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
