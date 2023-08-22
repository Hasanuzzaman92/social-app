import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo"> SocialSite</h3>
          <span className="loginDesc">
            Connect with friends and the world around your on SocialSite.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
