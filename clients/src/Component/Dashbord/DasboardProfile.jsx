import React from "react";
import "./Dashboard.css";
import Profile from "../Assets/tayyib.jpeg";

function DasboardProfile() {
  return (
    <div>
      <div className="profile-card">
        <img src={Profile} alt="profile-picture" />
        <h1>Profile Name</h1>
      </div>
    </div>
  );
}

export default DasboardProfile;
