import React from "react";
import oldwoman from "../../assets/oldwoman.webp";
import fatherandson from "../../assets/fatherandson.webp";
import youngwoman from "../../assets/youngwoman.webp";
import arrow from "../../assets/arrow.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="show-them">
        <div className="main-text">
          <p>Show Them Don't Just Tell</p>
        </div>
        <div className="middle-text">
          <p>
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>
        </div>
        <Link>
          <div className="install">
            <button>
              <p>Install HelpMeOut</p>
              <img src={arrow} alt="arrow" />
            </button>
          </div>
        </Link>
      </div>
      <div className="show-pictures">
        <div className="side1">
          <div className="one">
            <img src={oldwoman} alt="oldwoman" />
          </div>
          <div className="two">
            <img src={fatherandson} alt="fatherandson" />
          </div>
        </div>
        <div className="side2">
          <img src={youngwoman} alt="youngwoman" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
