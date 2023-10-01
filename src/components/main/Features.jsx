import React from "react";
import simpleScreen from "../../assets/simpleScreen.svg";
import easyShare from "../../assets/easyShare.svg";
import revisit from "../../assets/revisit.svg";
import featuredImg from "../../assets/featuresImg.svg";

const Features = () => {
  return (
    <div className="features">
      <div className="ftexts">
        <div className="featured-text">
          <p>Features</p>
        </div>
        <div className="featured-text2">
          <p>Key Highlights of Our Extension</p>
        </div>
      </div>
      <div className="feature-content">
        <div className="part">
          <div className="part1">
            <div className="content">
              <div className="contentImg">
                <img src={simpleScreen} alt="simpleScreen" />
              </div>
              <div className="contentText">
                <h2>Simple Screen Recording</h2>
                <p>
                  Effortless screen recording for everyone. Record with ease, no
                  tech expertise required.
                </p>
              </div>
            </div>
            <div className="content">
              <div className="contentImg">
                <img src={easyShare} alt="easyShare" />
              </div>
              <div className="contentText">
                <h2>Easy-to-Share URL</h2>
                <p>
                  Share your recordings instantly with a single link. No
                  attachments, no downloads.
                </p>
              </div>
            </div>
            <div className="content">
              <div className="contentImg">
                <img src={revisit} alt="revisit" />
              </div>
              <div className="contentText">
                <h2>Revisit Recordings</h2>
                <p>
                  Access and review your past content effortlessly. Your
                  recordings, always at your fingertips.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="part2">
          <img src={featuredImg} alt="featuredImg" />
        </div>
      </div>
    </div>
  );
};

export default Features;
