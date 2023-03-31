// eslint-disable-next-line
import style from "./Login.scss";
import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminUserApi } from "../../api/admin";
import { authLogin } from "../../api/auth";
import { ACCESS_TOKEN_KEY_NAME, USER_KEY_NAME } from "../../types";
import {
  handleSuccessResponse,
  handleErrorResponse,
} from "../../api/toast/index";

//TODO:convert to init-style
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const preparedUserAuth = { username: email, password };
    console.log(preparedUserAuth);
    authLogin(preparedUserAuth)
      .then((resp) => {
        const { user, accessToken } = resp.data.data;
        localStorage.setItem(ACCESS_TOKEN_KEY_NAME, accessToken);
        localStorage.setItem(USER_KEY_NAME, JSON.stringify(user));
        handleSuccessResponse(resp);
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        handleErrorResponse(err);
      });
  };

  return (
    <>
      <div className="loginHome">
        <div className="inputLogin">
          <div className="logo">Social Media App</div>
          <div className="input">
            <input
              type={Text}
              placeholder="Phone number, username, or email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
            <button onClick={handleLogin}>Log in</button>
            {/* <button onClick={testFunc.bind(null)}>test</button> */}
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
                to="/"
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
              <Link
                to=""
                style={{
                  fontWeight: "300",
                  fontSize: "12px",
                }}
              >
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
        <div className="signUp">
          <div>Don't have an account?</div>
          <div style={{ paddingLeft: "5px" }}>
            <Link to="/signup">Sign up</Link>
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
