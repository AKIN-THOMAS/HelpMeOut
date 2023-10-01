import React from "react";
import dashlogo from "../../assets/dashlogo.svg";
import dashprofile from "../../assets/dashprofile.svg";
import down from "../../assets/arrowdown.svg";
import { Link } from "react-router-dom";
import { Divider, defineStyle, defineStyleConfig } from "@chakra-ui/react";

const xl = defineStyle({
  border: "10px solid",
  borderRadius: "lg",
});

export const dividerTheme = defineStyleConfig({
  sizes: { xl },
});
const DashNav = () => {
  return (
    <header>
      <Divider size="xl" />
      <div className="dashnav">
        <Link to={"/home"}>
          <div className="dashlogo">
            <img src={dashlogo} alt="dashlogo" />
          </div>
        </Link>
        <div className="dashprofile">
          <img src={dashprofile} alt="dashprofile" />
          <span>John Mark</span>
          <img src={down} alt="down" />
        </div>
      </div>
    </header>
  );
};

export default DashNav;
