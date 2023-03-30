import style from "./Homepage.scss";
import CommonSidebar from "../../components/Sidebar/CommonSidebar/CommonSidebar";
import MiniSidebar from "../../components/Sidebar/MiniSidebar/MiniSidebar";
import Post from "../../components/Post/Post";
import UserList from "../../components/UserList/UserList";
import { PopupContext } from "../../App";
import { useState, useEffect, useContext } from "react";
import { listPosts } from "../../api/common/Post";
function Homepage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await listPosts();
      setPosts(res.data.data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <div className="home">
        <CommonSidebar />
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
        <UserList />
      </div>
    </>
  );
}

export default Homepage;
