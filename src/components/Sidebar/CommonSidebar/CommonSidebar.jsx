import React, { useEffect } from "react";
import { useState, useContext } from "react";
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

const CommonSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { togglePopupContentLevel, setPopupContentLevel } =
    useContext(PopupContext);

  const setPopupcontent = (content) => {
    setPopupContentLevel(0, content);
  };

  const togglePopup = () => {
    togglePopupContentLevel(0);
  };

  const handleLogoutAccount = () => {
    dispatch(handleLogout);
    navigate("/login");
    console.log("log out");
  };
  useEffect(() => {
    setPopupcontent(<PostForm />);
  }, []);

  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    console.log(open);
    setOpen(!open);
  };
  return (
    <div className="common-sidebar">
      <div className="top">
        <Link to="/">
          <div className="logo">Social Media</div>
        </Link>
      </div>

      <div className="center">
        <ul className="sidebar-list">
          <Link>
            <li className="sidebar-item">
              <div className="icon-container">
                <FontAwesomeIcon icon={faHouse} className="icon" />
              </div>
              Home
            </li>
          </Link>
          <Link>
            <li className="sidebar-item">
              <div className="icon-container">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
              </div>
              Search
            </li>
          </Link>
          <Link>
            <li className="sidebar-item">
              <div className="icon-container">
                <FontAwesomeIcon icon={faCompass} className="icon" />
              </div>
              Explore
            </li>
          </Link>
          <Link to="/message">
            <li className="sidebar-item">
              <div className="icon-container">
                <FontAwesomeIcon icon={faMessage} className="icon" />
              </div>
              Messages
            </li>
          </Link>
          <Link>
            <li className="sidebar-item">
              <div className="icon-container">
                <FontAwesomeIcon icon={faHeart} className="icon" />
              </div>
              Notifications
            </li>
          </Link>
          <Link>
            <li
              className="sidebar-item"
              onClick={() => {
                setPopupcontent(<NewPost />);
                togglePopup((p) => !p);
              }}
            >
              <div className="icon-container">
                <FontAwesomeIcon icon={faSquarePlus} className="icon" />
              </div>
              Create
            </li>
          </Link>
          <Link to="/profile">
            <li className="sidebar-item">
              <img
                className="profile-pic"
                src="https://i.pinimg.com/564x/79/f0/d8/79f0d8d5a4834074c370f5ee61476cc0.jpg"
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
                <div className="dropdown-item">
                  <Link>
                    Settings
                    <FontAwesomeIcon icon={faGear} className="icon" />
                  </Link>
                </div>
                <div className="ruler"></div>
                <div className="dropdown-item">
                  <Link>
                    Saved
                    <FontAwesomeIcon icon={faBookmark} className="icon" />
                  </Link>
                </div>
                <div className="ruler"></div>

                <div className="dropdown-item">
                  <Link>
                    Switch Appearance
                    <FontAwesomeIcon icon={faMoon} className="icon" />
                  </Link>
                </div>
                <div className="ruler"></div>

                <div className="dropdown-item">
                  <Link>
                    Your activity
                    <FontAwesomeIcon icon={faHourglass} className="icon" />
                  </Link>
                </div>
                <div className="ruler"></div>

                <div className="dropdown-item">
                  <Link>
                    Report a problem
                    <FontAwesomeIcon
                      icon={faCircleExclamation}
                      className="icon"
                    />
                  </Link>
                </div>
                <div className="ruler"></div>
              </div>
              <div className="dropdown-bottom">
                <div className="dropdown-item">
                  <Link>Switch accounts</Link>
                </div>
                <div className="ruler"></div>

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
