import React, { memo, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Message from "../pages/Message/Message";

export default memo(function () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Homepage />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/message" element={<Message />}></Route>
            </Routes>
        </BrowserRouter>
    );
});
