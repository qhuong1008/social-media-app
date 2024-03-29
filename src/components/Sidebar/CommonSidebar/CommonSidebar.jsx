import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { USER_KEY_NAME } from "../../../types";
import style from "./CommonSidebar.scss";
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
import SearchModal from "../../SearchModal/SearchModal";
import logo from '../../../assets/img/logo.png'

const CommonSidebar = (props) => {
  const user = JSON.parse(localStorage.getItem("USER_INFO"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { darkModeDispatch } = useContext(DarkModeContext);

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

  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };
  const setPopupSearchModal = (content) => {
    setPopupContentLevel(0, content);
  };
  useEffect(() => {
    setPopupSearchModal(<SearchModal />);

  }, [])
  return (
    <div className="common-sidebar">
      <div className="top">
        <div
          onClick={() => (window.location.href = "/")}
          className="logo-header"
        >
          {/* <div className="logo">Social Media</div> */}
          <img src={logo} className="logo" alt="" />
        </div>
      </div>

      <div className="center">
        <ul className="sidebar-list">
          <Link to="/">
            <li className="sidebar-item">
              <div className="icon-container">
                <FontAwesomeIcon icon={faHouse} className="icon" />
              </div>
              Home
            </li>
          </Link>
          <Link>
            <li className="sidebar-item" onClick={() => {
              setPopupSearchModal(<SearchModal />);
              togglePopup((p) => !p);
            }}>
              <div className="icon-container">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
              </div>
              Search
            </li>
          </Link>
          {/* <Link>
            <li className="sidebar-item">
              <div className="icon-container">
                <FontAwesomeIcon icon={faCompass} className="icon" />
              </div>
              Explore
            </li>
          </Link> */}
          <Link to="/message">
            <li className="sidebar-item">
              <div className="icon-container">
                <FontAwesomeIcon icon={faMessage} className="icon" />
              </div>
              Messages
            </li>
          </Link>
          {/* <Link>
            <li className="sidebar-item">
              <div className="icon-container">
                <FontAwesomeIcon icon={faHeart} className="icon" />
              </div>
              Notifications
            </li>
          </Link> */}
          <Link>
            <li
              className="sidebar-item"
              onClick={() => {
                setPopupcontent(<PostForm onPostCreatedSuccess={() => {
                  if (typeof (props.onPostCreatedSuccess) === 'function') {
                    props.onPostCreatedSuccess();
                  }
                }} />);
                togglePopup((p) => !p);
              }}
            >
              <div className="icon-container">
                <FontAwesomeIcon icon={faSquarePlus} className="icon" />
              </div>
              Create
            </li>
          </Link>
          <Link to={`/profile/${user.username}`}>
            <li className="sidebar-item">
              <img
                className="profile-pic"
                src={user.avatar != null ? user.avatar : avatar}
                alt="cutecatsfyp"
              />
              Profile
            </li>
          </Link>
        </ul>

        <ul className="menu" onClick={() => handleToggleMenu()}>
          <div className="menu-item">
            <div className="icon-container">
              <FontAwesomeIcon icon={faBars} className="icon" />
            </div>
            Menu
          </div>
          {open === true && (
            <div className="dropdown">
              <div className="dropdown-top">
                <div
                  className="dropdown-item"
                  onClick={() => darkModeDispatch({ type: "TOGGLE" })}
                >
                  <Link>
                    Switch Appearance
                    <FontAwesomeIcon icon={faMoon} className="icon" />
                  </Link>
                </div>
                <div className="ruler"></div>

                <div className="ruler"></div>
              </div>
              <div className="dropdown-bottom">
                <div className="dropdown-item" onClick={handleLogoutAccount}>
                  <Link>Log out</Link>
                </div>
              </div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CommonSidebar;
