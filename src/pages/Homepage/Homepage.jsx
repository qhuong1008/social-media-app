import style from "./Homepage.scss";
import { USER_KEY_NAME } from "../../types";

import CommonSidebar from "../../components/Sidebar/CommonSidebar/CommonSidebar";
import MiniSidebar from "../../components/Sidebar/MiniSidebar/MiniSidebar";
import Post from "../../components/Post/Post";
import UserList from "../../components/UserList/UserList";
import { PopupContext } from "../../App";
import { useState, useEffect, useContext } from "react";
import { listPosts } from "../../api/common/Post";
import BottomNavBar from "../../components/Sidebar/BottomNavBar/BottomNavBar";
import TopNavBar from "../../components/Sidebar/TopNavBar/TopNavBar";
function Homepage() {
  const user = JSON.parse(localStorage.getItem(USER_KEY_NAME));
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await listPosts();
      setPosts(res.data.data);
    };
    fetchPosts();
  }, []);
  console.log(posts);
  return (
    <>
      <div className="home">
        <CommonSidebar user={user} />
        <MiniSidebar />
        <TopNavBar />
        <BottomNavBar />
        <div className="home-container">
          <div className="post-list">
            {posts.map((post) => (
              <>
                <Post key={post.id} post={post} />
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
