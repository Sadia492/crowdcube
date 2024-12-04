import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

export default function MyDonation() {
  const donations = useLoaderData();
  return (
    <div>
      <h2>My donation</h2>
      <div className="grid grid-cols-2 gap-6">
        {donations.map((donation) => (
          <Card key={donation._id} campaign={donation}></Card>
        ))}
      </div>
    </div>
  );
}
