// eslint-disable-next-line
import style from "./Login.scss";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="home">
        <div className="inputLogin">
          <div className="logo">Social Media App</div>
          <div className="input">
            <input
              type={Text}
              placeholder="Phone number, username, or email"
              onChange={(e) => setEmail(e)}
              value={email}
            ></input>
            <input
              type={Text}
              placeholder="Password"
              onChange={(e) => setPassword(e)}
              value={password}
            ></input>
            <button>Log in</button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "30px",
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
          <div style={{ textAlign: "center" }}>
            <div style={{ marginBottom: "10px" }}>
              <Link
                to=""
                style={{
                  fontWeight: "300",
                  fontSize: "15px",
                }}
              >
                <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
                Log in with Facebook
              </Link>
            </div>
            <div>
              <Link to="" style={{ fontWeight: "300", fontSize: "12px" }}>
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
        <div className="signUp">
          <div>Don't have an account?</div>
          <div style={{ paddingLeft: "10px" }}>
            <Link to="">Sign up</Link>
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

export default Login;
