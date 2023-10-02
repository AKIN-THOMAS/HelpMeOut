import React from "react";
import { useState, useRef, useEffect } from "react";
import "../../styles/dashboard.css";
import { useParams } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import facebook from "../../assets/Facebook.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import copyIcon from "../../assets/copy.svg";
import Transcription from "./Transcription";

const VideoDetails = () => {
  const { id } = useParams();

  const [videos, setVideos] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copy, setCopy] = useState("");

  const inputRef = useRef(null);

  const handleCopyClick = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
      setCopy("Copied!");
    }
  };

  useEffect(() => {
    fetch(`https://hngx5-2.onrender.com/api/video/stream-video/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setVideos(data.data);
        console.log("videos:", videos);
        // setLoading(false);
      })
      .catch((error) => {
        setError(error);
        // setLoading(false);
      });
  }, []);
  console.log(videos);

  if (error) {
    return <ErrorMessage message={error.message} />;
  }
  return (
    <section>
      <div className="details-section">
        <div className="detailsTop">
          <div className="breadcrumb">
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="prev">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="/home" className="prev">
                  Recent Videos
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#" className="current">
                  {videos.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="videoName">
            <p>{videos.name}</p>
          </div>
        </div>
        <div className="detailsBody">
          <div className="detailsVideo">
            <div className="mainVideo">
              <video controls>
                <source src={videos.file_url} type="video/webm" />
              </video>
            </div>
            <div className="share-copy">
              <div className="share1">
                <div className="email">
                  <input placeholder="enter email of receiver" />
                  <button>Send</button>
                </div>
                <div className="videoUrl">
                  <input value={videos.file_url} ref={inputRef} readOnly />
                  <button onClick={handleCopyClick}>
                    <img src={copyIcon} alt="copy" />
                    Copy
                  </button>
                  <label className="copy">{copy ? <>{copy}✅</> : ""}</label>
                </div>
              </div>
              <div className="share2">
                <div className="shareApps">
                  <div className="shareText">
                    <p>Share your video </p>
                  </div>
                  <div className="shareOptions">
                    <div className="facebook">
                      <img src={facebook} alt="facebook" />
                      <p>Facebook</p>
                    </div>
                    <div className="whatsapp">
                      <img src={whatsapp} alt="facebook" />
                      <p>Whatsapp</p>
                    </div>
                    <div className="telegram">
                      <img src={telegram} alt="facebook" />
                      <p>Telegram</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="transcription-section">
          <Transcription />
        </div>
      </div>
    </section>
  );
};

export default VideoDetails;
