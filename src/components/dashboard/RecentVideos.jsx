import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { CircularProgress } from "@chakra-ui/react";
import ErrorMessage from "../ErrorMessage";

const RecentVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://hngx5-2.onrender.com/api/video/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setVideos(data);
        console.log(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <ErrorMessage message={error.message} />;
  }
  return (
    <section>
      <div className="video-section">
        {loading ? (
          <div>
            <CircularProgress
              isIndeterminate
              color="#141414"
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              margin={"auto"}
              height={"80vh"}
              width={"80vw"}
              size="120px"
            />
          </div>
        ) : videos.data.length === 0 ? (
          <div className="noVideo">
            <p>No videos yet</p>
          </div>
        ) : (
          <div className="recent">
            <div className="recentText">
              <p>Recent files</p>
            </div>
            <div className="recentVideos">
              {videos.data.map((video) => (
                <VideoCard
                  key={video.id}
                  fileurl={video.file_url}
                  videoname={video.name}
                  videoId={video.id}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentVideos;
