import style from "./Homepage.scss";
import { USER_KEY_NAME } from "../../types";

import CommonSidebar from "../../components/Sidebar/CommonSidebar/CommonSidebar";
import MiniSidebar from "../../components/Sidebar/MiniSidebar/MiniSidebar";
import Post from "../../components/Post/Post";
import UserList from "../../components/UserList/UserList";
import { PopupContext } from "../../App";
import { useState, useEffect, useContext } from "react";
import { listPosts } from "../../api/common/Post";
function Homepage() {
  const user = JSON.parse(localStorage.getItem(USER_KEY_NAME));
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await listPosts();
      console.log(res);
      if (res.data.status === "OK") setPosts(res.data.data.data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <div className="home">
        <CommonSidebar user={user} />
        <MiniSidebar />
        <div className="home-container">
          <div className="post-list">
            {posts.map((post) => (
              <>
                <Post key={post.id} post={post} />
                <div className="ruler"></div>
              </>
            ))}
          </div>
        </div>
        <UserList user={user} />
      </div>
    </>
  );
}

export default Homepage;
