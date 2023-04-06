// eslint-disable-next-line
import style from "./Login.scss";
import React from "react";
import { Link, NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminUserApi } from "../../api/admin";
import { authLogin } from "../../api/auth";
import { ACCESS_TOKEN_KEY_NAME, USER_KEY_NAME } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import {
  handleSuccessResponse,
  handleErrorResponse,
} from "../../api/toast/index";
import { handleLogin } from "../../redux/actions/authAction";
import { render } from "@testing-library/react";

//TODO:convert to init-style
function Login(props) {

  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginAccess = () => {

    dispatch(handleLogin(username, password)).then(() => {
      const user = JSON.parse(localStorage.getItem("USER_INFO"));
      if (user) {
        navigate("/profile/" + user.username);
      }
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
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            ></input>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
            <button className="login-btn" onClick={handleLoginAccess}>
              Log in
            </button>
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
