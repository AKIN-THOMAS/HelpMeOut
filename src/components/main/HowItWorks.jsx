import React from "react";
import howitworks from "../../assets/howitworksImg.svg";

const HowItWorks = () => {
  return (
    <div className="howitworks">
      <div className="howitworksText">
        <p>How it works</p>
      </div>
      <div className="howitworksCards">
        <div className="cards">
          <div className="card-upper">
            <span>1</span>
            <p>Record Screen</p>
          </div>
          <div className="cardText">
            <p>
              Click the "Start Recording" button in our extension. choose which
              part of your screen to capture and who you want to send it to.
            </p>
          </div>
          <div className="cardImg">
            <img src={howitworks} alt="howitworks" />
          </div>
        </div>
        <div className="cards">
          <div className="card-upper">
            <span>2</span>
            <p>Share Your Recording</p>
          </div>
          <div className="cardText">
            <p>
              We generate a shareable link for your video. Simply send it to
              your audience via email or copy the link to send via any platform.
            </p>
          </div>
          <div className="cardImg">
            <img src={howitworks} alt="howitworks" />
          </div>
        </div>
        <div className="cards">
          <div className="card-upper">
            <span>3</span>
            <p>Learn Effortlessly</p>
          </div>
          <div className="cardText">
            <p>
              Recipients can access your video effortlessly through the provided
              link, with our user-friendly interface suitable for everyone.
            </p>
          </div>
          <div className="cardImg">
            <img src={howitworks} alt="howitworks" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
