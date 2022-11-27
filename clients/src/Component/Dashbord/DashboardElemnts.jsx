import React from "react";
import "./Dashboard.css";

function DashboardElemnts() {
  return (
    <div>
      <div className="result-container">
        <div className="results">
          <h3>Disease</h3>
          <h1>3</h1>
        </div>

        <div className="results">
          <h3>Pests</h3>
          <h1>3</h1>
        </div>

        <div className="results">
          <h3>Health</h3>
          <h1>63%</h1>
        </div>
      </div>
    </div>
  );
}

export default DashboardElemnts;
