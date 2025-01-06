import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import RunningCampaign from "../components/RunningCampaign";
import { useLoaderData } from "react-router-dom";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import { Helmet } from "react-helmet";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";

export default function Home() {
  const runningCampaigns = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Crowdcube | Home</title>
      </Helmet>

      <Banner></Banner>
      <RunningCampaign runningCampaigns={runningCampaigns}></RunningCampaign>
      <Features></Features>
      <FAQ></FAQ>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
    </div>
  );
}
