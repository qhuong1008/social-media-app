// eslint-disable-next-line
import style from "./Login.scss";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminUserApi } from "../../api/admin";
import { authLogin } from "../../api/auth";
import { handleErrorResponse, handleSuccessResponse } from "../../api/toast";
import { ACCESS_TOKEN_KEY_NAME } from "../../types";

//TODO:convert to init-style
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //TODO: not commit, hom truoc test thoi, cai nay no goi luc tao comp r/
  //// may cai ham nay tui keu de test thoi chu k co gi

  //TODO: remove this
  const testFunc = () => {
    AdminUserApi.listUsers().then((resp) => {
      const rawListUsers = resp.data.data;
      console.log(rawListUsers);
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
              type={Text}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
            <button
              onClick={() => {
                const preparedUserAuth = { username: email, password };
                console.log(preparedUserAuth);
                authLogin(preparedUserAuth)
                  .then((resp) => {
                    const { user, accessToken } = resp.data.data;

                    //TODO: luu cai nay lai vao cho nao do (redux, localStorage, .. bla bla) de hien len navbar, sidebar, ...
                    console.log("user dang dang nhap hien tai: ", user);

                    //TODO: dem cuc nay di cho khac, redux hay gi do bla bla, khong set truc tiep
                    localStorage.setItem(ACCESS_TOKEN_KEY_NAME, accessToken);
                    handleSuccessResponse(resp);
                  })
                  .catch((err) => {
                    handleErrorResponse(err);
                  });
              }}
            >
              Log in
            </button>
            <button onClick={testFunc.bind(null)}>test</button>
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
