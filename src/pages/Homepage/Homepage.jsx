import style from "./Homepage.scss";
import CommonSidebar from "../../components/Sidebar/CommonSidebar/CommonSidebar";
import MiniSidebar from "../../components/Sidebar/MiniSidebar/MiniSidebar";
import Post from "../../components/Post/Post";
import UserList from "../../components/UserList/UserList";
import { PopupContext } from "../../App";
import { useEffect, useContext } from "react";

function Homepage() {
    return (
        <>
            <div className="home">
                <CommonSidebar />
                <MiniSidebar />
                <div className="home-container">
                    <div className="post-list">
                        <Post />
                        <div className="ruler"></div>
                        <Post />
                        <div className="ruler"></div>
                        <Post />
                        <div className="ruler"></div>
                    </div>
                </div>
                <UserList />
            </div>
        </>
    );
}

export default Homepage;
