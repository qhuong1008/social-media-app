import style from "./Homepage.scss";
import CommonSidebar from "../../components/Sidebar/CommonSidebar/CommonSidebar";
import MiniSidebar from "../../components/Sidebar/MiniSidebar/MiniSidebar";
import Post from "../../components/Post/Post";

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
      </div>
    </>
  );
}

export default Homepage;
