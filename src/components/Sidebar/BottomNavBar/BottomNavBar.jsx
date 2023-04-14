import React, { useEffect } from "react";
import { useState, useContext } from "react";
import style from "./BottomNavBar.scss";
import { Link, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBookmark,
  faCircleExclamation,
  faCompass,
  faGear,
  faHourglass,
  faHouse,
  faMagnifyingGlass,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faMessage,
  faSquarePlus,
} from "@fortawesome/free-regular-svg-icons";
import { PopupContext } from "../../../App";
import PostForm from "../../PostForm/PostForm";
import { useDispatch } from "react-redux";
import { handleLogout } from "../../../redux/actions/authAction";
import NewPost from "../../PostForm/PostForm";
import avatar from "../../../assets/img/avt.jpg";
import { DarkModeContext } from "../../../context/darkModeContext";

function BottomNavBar() {
  const [open, setOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("USER_INFO"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { darkModeDispatch } = useContext(DarkModeContext);

  const handleToggleMenu = () => {
    console.log(open);
    setOpen(!open);
  };
  const { togglePopupContentLevel, setPopupContentLevel } =
    useContext(PopupContext);

  const setPopupcontent = (content) => {
    setPopupContentLevel(0, content);
  };

  const togglePopup = () => {
    togglePopupContentLevel(0);
  };

  const handleLogoutAccount = () => {
    dispatch(handleLogout());
    navigate("/login");
  };
  useEffect(() => {
    setPopupcontent(<PostForm />);
  }, []);

  return (
    <>
      <div className="bottom-navbar">
        <div className="navbar-list">

          <div className="navbar-item">
            <Link to='/'>
              <FontAwesomeIcon icon={faHouse} className="icon" />
            </Link>
          </div>
          <div className="navbar-item">
            <Link>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            </Link>
          </div>
          <div className="navbar-item">
            <Link>
              <FontAwesomeIcon icon={faSquarePlus} className="icon" />
            </Link>
          </div>
          <div className="navbar-item">
            <Link to='/message'>
              <FontAwesomeIcon icon={faMessage} className="icon" />
            </Link>
          </div>

          <div className="navbar-item">
            <Link to={`/profile/${user.username}`}>
              <img
                className="profile-pic"
                src="http://localhost:9000/spring-instagram-bucket/images/image7b7c31e7-101a-4fb7-8e67-4e53530805ce.jpg"
                alt="cutecatsfyp"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomNavBar;
