import React from "react";
import Card from "./Card";
import { Typewriter } from "react-simple-typewriter";
export default function RunningCampaign({ runningCampaigns }) {
  return (
    <div id="running" className="w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mt-12">
        {" "}
        <Typewriter
          words={["Running Campaign"]}
          loop={true} // Set to true to loop through the words
          cursor
          cursorStyle="_"
          typeSpeed={130} // Adjust typing speed (default is 100)
          deleteSpeed={100} // Adjust delete speed (default is 50)
          delaySpeed={1000} // Delay between typing and deleting (default is 1000)
        />
      </h2>
      <p className="text-center text-gray-500 w-1/2 mb-12 mx-auto">
        Join our ongoing campaigns and help make a direct impact on those in
        need. Together, we can bring warmth and hope to the most vulnerable
        communities.
      </p>
      <div className="grid grid-cols-2 gap-6">
        {runningCampaigns.map((campaign) => (
          <Card key={campaign._id} campaign={campaign}></Card>
        ))}
      </div>
    </div>
  );
}
