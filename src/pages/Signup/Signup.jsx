// eslint-disable-next-line
import style from "./Signup.scss";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState();
  const [fullName, setFullName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <>
      <div className="signUpHome">
        <div className="inputSignUp">
          <div className="logo">Social Media App</div>

          <p>Sign up to see photos and videos from your friends.</p>

          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <Link to="/">Log in with Facebook</Link>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "20px",
              color: "#cccccc",
              fontWeight: "400",
              fontSize: "15px",
            }}
          >
            <div
              style={{
                height: "1px",
                backgroundColor: "#cccccc",
                flexGrow: "1",
                position: "relative",
                top: "0.5rem",
                marginRight: "0.5rem",
              }}
            ></div>
            <div>OR</div>
            <div
              style={{
                height: "1px",
                backgroundColor: "#cccccc",
                flexGrow: "1",
                position: "relative",
                top: "0.5rem",
                marginLeft: "0.5rem",
              }}
            ></div>
          </div>

          <div className="input">
            <input
              type={Text}
              placeholder="Mobile Number or Email"
              onChange={(e) => setEmail(e)}
              value={email}
            ></input>
            <input
              type={Text}
              placeholder="Fullname"
              onChange={(e) => setFullName(e)}
              value={fullName}
            ></input>
            <input
              type={Text}
              placeholder="Username"
              onChange={(e) => setUsername(e)}
              value={username}
            ></input>
            <input
              type={Text}
              placeholder="Password"
              onChange={(e) => setPassword(e)}
              value={password}
            ></input>
            <div></div>
            <p>
              By signing up, you agree to our Terms , Privacy Policy and Cookies
              Policy .
            </p>
            <button style={{ border: "0" }}>Sign up</button>
          </div>
        </div>

        <div className="signUp">
          <div>Have an account?</div>
          <div style={{ paddingLeft: "5px" }}>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>

      <div className="footer">
        <ul>
          <li>Blog</li>
          <li>Jobs</li>
          <li>Help</li>
          <li>Privacy</li>
          <li>Contact</li>
        </ul>
        <div style={{ textAlign: "center", margin: "5px 0" }}>
          @2023 Media Social From HCMUTE
        </div>
      </div>
    </>
  );
}

export default Signup;
