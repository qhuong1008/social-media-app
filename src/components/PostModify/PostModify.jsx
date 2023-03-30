import { useEffect, useContext } from "react";
import Popup from "../Popup/index";
import { PopupContext } from "../../App";
import styles from "./PostModify.scss";

function PostModify() {
  const { togglePopup, setPopupcontent } = useContext(PopupContext);

  return (
    <div className="post-modify-wrapper">
      <ul>
        <li className="red">Report</li>
        <li className="red">Unfollow</li>
        <li>Add to favourites</li>
        <li>Go to post</li>
        <li>Share to...</li>
        <li>Copy link</li>
        <li>Embed</li>
        <li>Cancel</li>
      </ul>
    </div>
  );
}

export default PostModify;
