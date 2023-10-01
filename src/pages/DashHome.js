import React from "react";
import ".././styles/dashboard.css";
// import search from ".././assets/searchicon.svg";
import { Divider, defineStyle, defineStyleConfig } from "@chakra-ui/react";
import RecentVideos from "../components/dashboard/RecentVideos";

const xl = defineStyle({
  border: "40px solid",
  borderRadius: "lg",
});

export const dividerTheme = defineStyleConfig({
  sizes: { xl },
});

const DashHome = () => {
  return (
    <section>
      <div>
        <div className="top">
          <div className="greetings">
            <h3>Hello, John Mark</h3>
            <p>Here are your recorded videos</p>
          </div>
          <div className="search">
            <input placeholder="Search for a particular video" type="text" />
            {/* <img src={search} alt="search" /> */}
          </div>
        </div>
      </div>
      <Divider size="xl" />
      {/* Videos section */}
      <RecentVideos />
    </section>
  );
};

export default DashHome;
