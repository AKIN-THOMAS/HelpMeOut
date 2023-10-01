import React from "react";
import { Divider, defineStyle, defineStyleConfig } from "@chakra-ui/react";
import dashlogo from "../../assets/dashlogo.svg";
import google from "../../assets/google.svg";
import facebook from "../../assets/Facebook.svg";
import line from "../../assets/Line.svg";
import { Link } from "react-router-dom";

const xl = defineStyle({
  border: "10px solid",
  borderRadius: "lg",
});

export const dividerTheme = defineStyleConfig({
  sizes: { xl },
});

const Login = () => {
  return (
    <div className="login-section">
      <Divider size="xl" />
      <Link to={"/"}>
        <div className="login-logo">
          <img src={dashlogo} alt="dashlogo" />
        </div>
      </Link>
      <div className="login">
        <div className="login-signup">
          <h1>Log in or Sign up</h1>
          <p>
            Join millions of others in sharing successful moves on HelpMeOut.
          </p>
        </div>
        <div className="google-facebook">
          <div className="google">
            <div>
              <img src={google} alt="google" />
              <p>Continue with Google</p>
            </div>
          </div>
          <div className="facebook1">
            <div>
              <img src={facebook} alt="facebook" />
              <p>Continue with Facebook</p>
            </div>
          </div>
        </div>
        <div className="divider">
          <div>
            <img src={line} alt="line" />
          </div>
          <div>
            <p>or</p>
          </div>
          <div>
            <img src={line} alt="line" />
          </div>
        </div>
        <div className="email-password">
          <div className="email1">
            <label>Email</label>
            <input type="email" placeholder="Just click the signin button" />
          </div>
          <div className="email1">
            <label>Password</label>
            <input type="password" placeholder="Just click the signin button" />
          </div>
        </div>
        <Link to={"/home"}>
          <div className="signup-btn">
            <button>Sign Up</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
