import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import RunningCampaign from "../components/RunningCampaign";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const runningCampaigns = useLoaderData();
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const themeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
      <div className="text-right pr-20 absolute right-0 z-10 top-20">
        <input
          onClick={themeToggle}
          type="checkbox"
          className="toggle toggle-warning"
          defaultChecked
        />
      </div>
      <Banner></Banner>
      <RunningCampaign runningCampaigns={runningCampaigns}></RunningCampaign>
    </div>
  );
}
