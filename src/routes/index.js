import React, { memo, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Message from "../pages/Message/Message";
import Profile from "../pages/Profile/Profile";
import UserPost from "../components/UserPost/UserPost";
import PeopleProfile from "../pages/PeopleProfile/PeopleProfile";
import { DarkModeContext } from "../context/darkModeContext";
import "../dark.scss";
import EditProfile from "../pages/EditProfile/EditProfile";

export default memo(function () {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Homepage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/message" element={<Message />}></Route>
          <Route path={`/profile/:username?`} element={<Profile />}></Route>
          <Route path="/peopleprofile" element={<PeopleProfile />}></Route>
          <Route path="/profile/edit" element={<EditProfile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
});
