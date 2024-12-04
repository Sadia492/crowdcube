import React from "react";
import Card from "./Card";

export default function RunningCampaign({ runningCampaigns }) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-12">Running</h2>

      <div className="grid grid-cols-2 gap-6">
        {runningCampaigns.map((campaign) => (
          <Card key={campaign._id} campaign={campaign}></Card>
        ))}
      </div>
    </div>
  );
}
