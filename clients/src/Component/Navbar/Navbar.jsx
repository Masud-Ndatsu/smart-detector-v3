import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.png";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import "./Navbar.css";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className={
        toggle
          ? "navbar expanded nav-container z-10 shadow-xl"
          : "navbar nav-container z-10 shadow-xl"
      }
    >
      <nav className="flex justify-between items-center w-screen h-[80px] box-border">
        <img
          src={Logo}
          alt="Smart-Detector-Logo"
          className="w-[10%] logo"
        />
        <ul className="flex items-center hidden md:flex">
          <li>
            <Link to="/" className="thelink font-semibold">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="thelink font-semibold">
              About
            </Link>
          </li>

          <li>
            <Link to="/tryit" className="thelink font-semibold">
              Try-It
            </Link>
          </li>

          <li>
          <Link to="/in-touch" className="thelink font-semibold">
           Contact
          </Link>
          </li>
          <Link to="/register">
            <li className="signup bg-[#1271FF] px-7 py-2  text-white rounded-[6px]">
              Sign Up
            </li>
          </Link>
        </ul>

        <div onClick={handleToggle} className="toggleBtn">
          {toggle ? (
            <HiOutlineX className="w-[40px] h-[40px] mr-[20px] md:hidden" />
          ) : (
            <HiOutlineMenu className="w-[40px] h-[40px] mr-[20px] md:hidden" />
          )}
        </div>
      </nav>

      <ul
        className={
          toggle ? "items-center md:hidden p-5" : "items-center hidden p-5"
        }
      >
        <li>
          <Link to="/" className="font-semibold">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="font-semibold">
            About
          </Link>
        </li>
        <li>
          <Link to="/tryit" className="font-semibold">
            {" "}
            Try-It{" "}
          </Link>{" "}
        </li>
        <li>
          <Link to="/in-touch" className="font-semibold">
            Contact
          </Link>
        </li>
        <li className="bg-[#1271FF] px-7 py-2  text-white rounded-[6px] w-full text-center">
          <Link to="/signup">
            <button>Sign-up</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
