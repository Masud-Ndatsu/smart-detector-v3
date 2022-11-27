import React from "react";
import { Link } from "react-router-dom";
import DasboardProfile from "./DasboardProfile";
import Logo from "../Assets/Logo.png";

function DashboardNav() {
  return (
    <nav className="bg-green-300 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 fixed top-0 z-10 w-full box-border">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            className="h-6 mr-3 sm:h-9"
            alt="Smart Detector logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Smart Detector
          </span>
        </Link>

        <DasboardProfile />

        <div className="flex md:order-2">
          <Link to="/logout">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              LogOut
            </button>{" "}
          </Link>
          
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
}

export default DashboardNav;
