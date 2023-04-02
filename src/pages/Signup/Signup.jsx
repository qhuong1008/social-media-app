// eslint-disable-next-line
import style from "./Signup.scss";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { handleRegisterUser } from "../../redux/actions/authAction";
import {
  handleSuccessResponse,
  handleErrorResponse,
  handleSuccessMessage,
  handleErrorMessage,
} from "../../api/toast/index";
import { INTERFACE_SIGN_UP_FORM } from "./interfaces";
import { useDispatch } from "react-redux";

function Signup() {
  const dispatch = useDispatch();
  const [signupFormData, setSignupFormData] = useState(INTERFACE_SIGN_UP_FORM);

  const handleInputchange = (e) => {
    setSignupFormData(
      (u) =>
        (u = {
          ...signupFormData,
          [e.target.name]: e.target.value,
        })
    );
  };

  const isAnyFieldEmpty = (formData) => {
    for (const key in formData) {
      if (formData[key] == "" || formData[key] == null) {
        return true;
      }
    }
    return false;
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (isAnyFieldEmpty(signupFormData)) {
      handleErrorMessage("Thông tin không được trống!");
    } else {
      const user = { ...signupFormData };
      dispatch(handleRegisterUser(user));
    }
  };
  return (
    <>
      <div className="signUpHome">
        <div className="inputSignUp">
          <div className="logo">Social Media App</div>

          <p>Sign up to see photos and videos from your friends.</p>

          {/* <div style={{ textAlign: "center", marginBottom: "20px" }}>
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
          </div> */}

          <form className="input" onSubmit={handleSignup} method="POST">
            <input
              type={Text}
              placeholder="Email"
              onChange={handleInputchange}
              name="email"
            ></input>
            <input
              type={Text}
              placeholder="Display name"
              name="displayName"
              onChange={handleInputchange}
            ></input>
            <input
              type={Text}
              placeholder="Username"
              onChange={handleInputchange}
              name="username"
            ></input>
            <input
              type="password"
              placeholder="Password"
              onChange={handleInputchange}
              name="password"
            ></input>
            <div></div>
            <p>
              By signing up, you agree to our Terms , Privacy Policy and Cookies
              Policy .
            </p>
            <button className="signup-btn" type="submit">
              Sign up
            </button>
          </form>
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
