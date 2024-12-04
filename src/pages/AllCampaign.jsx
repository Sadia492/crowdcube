import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function AllCampaign() {
  const loadedData = useLoaderData();
  const [data, setData] = useState(loadedData);
  const handleSort = () => {
    console.log("hello");
    const sortedData = [...data].sort((a, b) => b.amount - a.amount);
    setData(sortedData);
  };

  return (
    <div>
      <h2>All Campaign</h2>
      <button onClick={handleSort} className="btn btn-outline">
        Sort
      </button>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Campaign Title</th>
              <th>Campaign Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((campaign, idx) => (
              <tr key={campaign._id} className="hover">
                <th>{idx + 1}</th>
                <td>{campaign.name}</td>
                <td>{campaign.title}</td>
                <td>{campaign.type}</td>
                <td>{campaign.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
