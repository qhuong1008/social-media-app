import styles from "./FollowerModal.scss";
function FollowerModal() {
  return (
    <div className="follower-modal-wrapper">
      <div className="follower-modal-header">Followers</div>
      <div className="ruler"></div>
      <div className="follower-list">
        <div className="follower-item">
          <div className="follower-left">
            <img
              src="https://i.pinimg.com/474x/ee/2a/71/ee2a7149341c2b23ae2e9c7358ec247d.jpg"
              alt=""
            />
            <a href="/profile/catlmao1234">
              <div className="username">catlmao1234</div>
            </a>
            <div className="follow-btn">Follow</div>
          </div>

          <div className="follower-right">
            <div className="delete-btn">Remove</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowerModal;
