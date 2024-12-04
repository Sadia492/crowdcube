import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

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
  console.log(userCampaigns);
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
                    <button className="btn">Delete</button>
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
