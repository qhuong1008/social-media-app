import { useEffect, useContext } from "react";
import Popup from "../Popup/index";
import { PopupContext } from "../../App";
import styles from "./UserPostModify.scss";

function UserPostModify(props) {
  return (
    <div className="post-modify-wrapper">
      <ul>
        <li className="red">Delete</li>
        <li>Edit</li>
        <li>Hide like account</li>
        <li>Turn off something</li>
        <li>Go to post</li>
        <li>Share to...</li>
        <li>Copy link</li>
        <li>Embed</li>
        <li>About this account</li>
        <li
          onClick={() => {
            if (typeof props.onCancel === "function") {
              props.onCancel();
            }
          }}
        >
          Cancel
        </li>
      </ul>
    </div>
  );
}

export default UserPostModify;
