import styles from "./TagModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function TagModal() {
  return (
    <div className="tag-modal-container">
      <div className="tag-header">
        <div>Tag</div>
        <div className="search-area">
          <input type="text" placeholder="Search" />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        </div>
      </div>
      <div className="ruler"></div>
      <div className="tag-list">
        <div className="tag-user">
          <div className="user-img">
            <img
              src="https://i.pinimg.com/564x/dc/92/1e/dc921ec2e07f9437dc51f2a10694578d.jpg"
              alt=""
            />
          </div>
          <div className="user-info">cat_if_instagram</div>
        </div>
        <div className="tag-user">
          <div className="user-img">
            <img
              src="https://i.pinimg.com/564x/dc/92/1e/dc921ec2e07f9437dc51f2a10694578d.jpg"
              alt=""
            />
          </div>
          <div className="user-info">cat_if_instagram</div>
        </div>
        <div className="tag-user">
          <div className="user-img">
            <img
              src="https://i.pinimg.com/564x/dc/92/1e/dc921ec2e07f9437dc51f2a10694578d.jpg"
              alt=""
            />
          </div>
          <div className="user-info">cat_if_instagram</div>
        </div>
        <div className="tag-user">
          <div className="user-img">
            <img
              src="https://i.pinimg.com/564x/dc/92/1e/dc921ec2e07f9437dc51f2a10694578d.jpg"
              alt=""
            />
          </div>
          <div className="user-info">cat_if_instagram</div>
        </div>
      </div>
    </div>
  );
}

export default TagModal;
