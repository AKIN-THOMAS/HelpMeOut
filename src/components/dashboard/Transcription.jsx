import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import dropdown from "../../assets/dropdown.svg";

const Transcription = () => {
  return (
    <div className="transcript">
      <div className="transcript-top">
        <p>Transcript</p>
        <div className="dropdown">
          <Menu className="dropMenu">
            <MenuButton
              as={Button}
              rightIcon={<img src={dropdown} alt="dropdown" />}
              className="lang"
              background={"#fff"}
              width={"150px"}
              padding="16px"
              border={"1px solid #cfcfcf"}
            >
              English
            </MenuButton>
            <MenuList>
              <MenuItem>Other languages</MenuItem>
              <MenuItem>Other languages</MenuItem>
              <MenuItem>Other languages</MenuItem>
            </MenuList>
          </Menu>
        </div>

        <div className="transcribe-text"></div>
      </div>
    </div>
  );
};

export default Transcription;
