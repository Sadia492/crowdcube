import React from "react";
import Card from "./Card";

export default function RunningCampaign({ runningCampaigns }) {
  return (
    <div id="running" className="w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-center mt-12">Running Campaign</h2>
      <p className="text-center text-gray-500 w-1/2 mb-12 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        quaerat natus, voluptatibus possimus mollitia libero voluptate expedita
        at. Quod, blanditiis?
      </p>
      <div className="grid grid-cols-2 gap-6">
        {runningCampaigns.map((campaign) => (
          <Card key={campaign._id} campaign={campaign}></Card>
        ))}
      </div>
    </div>
  );
}
