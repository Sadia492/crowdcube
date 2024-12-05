import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import DonationCard from "../components/DonationCard";
import { authContext } from "../AuthProvider/AuthProvider";

export default function MyDonation() {
  const { user } = useContext(authContext);
  const [donations, setDonations] = useState([]);
  // const donations = useLoaderData();
  useEffect(() => {
    fetch(`http://localhost:5000/user-donations/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDonations(data);
      });
  }, [user]);
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
