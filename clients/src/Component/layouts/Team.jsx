import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import TayyibI from "../Assets/tayyib.jpeg";

function Team() {
  return (
    <div>
      <h1 className="text-center p-6 font-semibold text-3xl">Meet The Team</h1>

      <div className="team-container">
        <div className="tayyib">
          <img src={TayyibI} alt="our story image" className="Tayyib" />
          <div className="about">
            <h1>Tayyib Gbondo</h1>
            <p>Software engineer</p>
            <ul className="handles">
              <li>
                <Link to="">Facebook</Link>
              </li>
              <li>
                <Link to="">twitter</Link>
              </li>
              <li>
                <Link to="">Linkedin</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="tayyib">
          <img src={TayyibI} alt="our story image" className="Tayyib" />
          <div className="about">
            <h1>Tayyib Gbondo</h1>
            <p>Software engineer</p>
            <ul className="handles">
              <li>
                <Link to="">Facebook</Link>
              </li>
              <li>
                <Link to="">twitter</Link>
              </li>
              <li>
                <Link to="">Linkedin</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="tayyib">
          <img src={TayyibI} alt="our story image" className="Tayyib" />
          <div className="about">
            <h1>Tayyib Gbondo</h1>
            <p>Software engineer</p>
            <ul className="handles">
              <li>
                <Link to="">Facebook</Link>
              </li>
              <li>
                <Link to="">twitter</Link>
              </li>
              <li>
                <Link to="">Linkedin</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
