import React from "react";
import Banner from "../components/Banner";
import RunningCampaign from "../components/RunningCampaign";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const runningCampaigns = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <RunningCampaign runningCampaigns={runningCampaigns}></RunningCampaign>
    </div>
  );
}
