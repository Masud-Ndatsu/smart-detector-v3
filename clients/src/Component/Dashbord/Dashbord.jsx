import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardNav from "./DashboardNav";
import DashboardElemnts from "./DashboardElemnts";

function Dashbord() {
  
  return (
    <div>
      <DashboardNav />
      <DashboardElemnts />
    </div>
  );
}

export default Dashbord;
