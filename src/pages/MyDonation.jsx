import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import DonationCard from "../components/DonationCard";

export default function MyDonation() {
  const donations = useLoaderData();
  return (
    <div>
      <h2>My donation</h2>
      <div className="grid grid-cols-3 gap-6">
        {donations.map((donation) => (
          <DonationCard key={donation._id} campaign={donation}></DonationCard>
        ))}
      </div>
    </div>
  );
}
