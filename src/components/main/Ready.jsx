import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../styles/styles.css";
import copyIcon from "../../assets/copy.svg";
import facebook from "../../assets/Facebook.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import test from "../../assets/yourVideoTest.svg";
import ErrorMessage from "../ErrorMessage";

const Ready = () => {
  const { id } = useParams();
  const [copy, setCopy] = useState("");
  const [videos, setVideos] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const inputRef = useRef(null);

  const handleCopyClick = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
      setCopy("Copied!");
    }
  };
  useEffect(() => {
    fetch(`https://hngx5-2.onrender.com/api/video/${id}`)
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

  if (error) {
    return <ErrorMessage message={error.message} />;
  }
  return (
    <div>
      <div className="ready">
        <div className="upperReady">
          <div className="yourVideo">
            <div className="yourVideoTitle">
              <h3>Your video is ready!</h3>
            </div>
            <div className="yourVideoDetails">
              <div className="yourVideoName">
                <label>Name</label>
                <p>{videos.name}</p>
              </div>
              <div className="yourVideoEmail">
                <input placeholder="enter email of receiver" />
                <button>Send</button>
              </div>
              <div className="yourVideoLink">
                <label>videoUrl</label>
                <input value={videos.file_url} ref={inputRef} readOnly />
                <button onClick={handleCopyClick}>
                  <img src={copyIcon} alt="copy" />
                  Copy
                </button>
              </div>
            </div>
            <div className="yourVideShare">
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
          <div className="video-transcript">
            <div className="yourRecVideo">
              <video controls>
                <source src={videos.file_url} type="video/webm" />
              </video>
            </div>
            <div className="yourTranscripts"></div>
          </div>
        </div>
        <div className="lowerReady">
          <div className="advice">
            <div className="adviceText">
              <p>
                To ensure the availability and privacy of your video, we
                recommend saving it to your account.
              </p>
            </div>
            <div className="adviceBtn">
              <button>Save Video</button>
            </div>
            <div className="adviceCreate">
              <p>
                Don’t have an account? <a href="">Create account</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;
