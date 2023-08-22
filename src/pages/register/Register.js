import React from "react";
import "./Register.css";

const Register = () => {
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
          <div className="loginBox">
            <input type="text" placeholder="User Name" className="loginInput" />
            <input type="email" placeholder="Email" className="loginInput" />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="loginInput"
            />
            <button className="loginButton">Sign Up</button>
            <span className="loginForgot">Forgot password?</span>
            <button className="loginRegisterButton">
              Already have an account?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
