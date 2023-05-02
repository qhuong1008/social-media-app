import React, { useEffect } from "react";
import { useState, useContext } from "react";
import style from "./MiniSidebar.scss";
import { Link, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchModal from "../../SearchModal/SearchModal";
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

function MiniSidebar() {
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
  const setPopupSearchModal = (content) => {
    setPopupContentLevel(0, content);
  };
  useEffect(() => {
    setPopupcontent(<PostForm />);
    setPopupSearchModal(<SearchModal />);

  }, []);

  return (
    <>
      <div className="mini-sidebar">
        <div className="top">
          <Link to="/">
            <svg
              aria-label="Instagram"
              class="_ab6-"
              color="rgb(38, 38, 38)"
              fill="rgb(38, 38, 38)"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
            </svg>
            <div className="logo"></div>
          </Link>
        </div>
        <div className="center">
          <div className="sidebar-list">
            <div className="sidebar-item">
              <Link>
                <FontAwesomeIcon icon={faHouse} className="icon" />
              </Link>
            </div>
            <div className="sidebar-item"
              onClick={() => {
                setPopupSearchModal(<SearchModal />);
                togglePopup((p) => !p);
              }}>
              <Link>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
              </Link>
            </div>
            <div className="sidebar-item">
              <Link>
                <FontAwesomeIcon icon={faCompass} className="icon" />
              </Link>
            </div>
            <div className="sidebar-item">
              <Link to="/message">
                <FontAwesomeIcon icon={faMessage} className="icon" />
              </Link>
            </div>
            <div className="sidebar-item">
              <Link>
                <FontAwesomeIcon icon={faHeart} className="icon" />
              </Link>
            </div>
            <div
              className="sidebar-item"
              onClick={() => {
                setPopupcontent(<PostForm />);
                togglePopup((p) => !p);
              }}
            >
              <Link>
                <FontAwesomeIcon icon={faSquarePlus} className="icon" />
              </Link>
            </div>
            <div className="sidebar-item">
              <Link to={`/profile/${user.username}`}>
                <img
                  className="profile-pic"
                  src="https://i.pinimg.com/564x/79/f0/d8/79f0d8d5a4834074c370f5ee61476cc0.jpg"
                  alt="cutecatsfyp"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="bottom" onClick={() => handleToggleMenu()}>
          <Link>
            <FontAwesomeIcon icon={faBars} className="icon" />
          </Link>
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

                <div className="dropdown-item">
                  <Link>Log out</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MiniSidebar;
