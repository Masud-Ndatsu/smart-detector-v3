import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Register from "./Component/auth/Register";
import Login from "./Component/auth/Login";
import Landing from "./Component/Pages/Landing";
import About from "./Component/Pages/About";
import Dashbord from "./Component/Dashbord/Dashbord";
import Contact from "./Component/Pages/Contact";
import Tryit from "./Component/Pages/Tryit";
import ForgetPassword from "./Component/layouts/ForgetPassword";
import ResetPassword from "./Component/layouts/ResetPassword";
import Logout from "./Component/auth/Logout";
import ResetMessage from "./Component/layouts/ResetMessage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/dashboard" element={<Dashbord />} />
        <Route path="/in-touch" element={<Contact />} />
        <Route path="/tryit" element={<Tryit />} />
        <Route path="/Forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:resetToken" element={<ResetPassword />} />
        <Route path="/emailsent" element={<ResetMessage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
