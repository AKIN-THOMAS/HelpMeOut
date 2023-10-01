import React from "react";
import footerLogo from "../../assets/footerLogo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footerImg">
          <img src={footerLogo} alt="footerLogo" />
        </div>
        <div className="foot">
          <div className="foot1">
            <div className="footerhead">
              <p>Menu</p>
            </div>
            <div className="footerOptions">
              <p>Home</p>
              <p>Converter</p>
              <p>How it works</p>
            </div>
          </div>
          <div>
            <div className="foot1">
              <div className="footerhead">
                <p>About us</p>
              </div>
              <div className="footerOptions">
                <p>About</p>
                <p>Contact Us</p>
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>
          <div>
            <div className="foot1">
              <div className="footerhead">
                <p>Screen Record</p>
              </div>
              <div className="footerOptions">
                <p>Browser Window</p>
                <p>Desktop</p>
                <p>Application</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
