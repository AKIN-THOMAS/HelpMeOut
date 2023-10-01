import React from "react";
// import test from "../../assets/video frame test.png";
import link from "../../assets/linkIcon.svg";
import options from "../../assets/moreIcon.svg";
import { Link } from "react-router-dom";

const VideoCard = ({ fileurl, videoname, videoId }) => {
  return (
    <Link to={`${videoId}`}>
      <div className="videoCard">
        <div className="videoImage">
          <video width="575" height="473" controls>
            <source src={`${fileurl}`} type="video/mp4" />
          </video>
        </div>

        <div className="videoTexts">
          <div className="title-date">
            <h2>{videoname}</h2>
            <p>SEPTEMBER 23, 2023</p>
          </div>
          <div className="link-options">
            <img src={link} alt="link" />
            <img src={options} alt="more" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
