import CommonSidebar from "../../components/Sidebar/CommonSidebar/CommonSidebar";
import MiniSidebar from "../../components/Sidebar/MiniSidebar/MiniSidebar";
import styles from './ChangePassword.scss'
import { useState, useEffect } from 'react'
import { changePassword, updateUser } from '../../api/common/User'
import { getUserByUsername } from "../../api/common/User";
import {
  handleErrorFEResponse, handleSuccessMessage, handleSuccessFEResponse
} from "../../api/toast/index";
import $ from "../../components/PostForm/PostForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowsRotate,
  faEarthAsia,
  faTag,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { uploadImg } from "../../api/common/Storage";
import { uploadUserImg } from '../../api/common/User'
import { } from "@fortawesome/free-regular-svg-icons";
import avatar from '../../assets/img/avt.jpg'
import { useParams } from "react-router-dom";
import { getUserById } from "../../api/common/User";
import { handleLogin } from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";
import { authLogin } from "../../api/auth";


function ChangePassword() {
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("USER_INFO"));
  const [currentPw, setCurrentPw] = useState("")
  const [newPw, setNewPw] = useState("");
  const [retypePw, setRetypePw] = useState("")
  const [isEmpty, setIsEmpty] = useState()


  const handleChangePassword = () => {
    if (currentPw === "" || newPw === "" || retypePw === "") {
      handleErrorFEResponse("Vui lòng nhập đủ thông tin!")
    }
    else {
      const authObj = {
        username: user.username,
        password: currentPw
      }
      const pw = {
        password: retypePw
      }
      authLogin(authObj).then(resp => {
        changePassword(user.id, pw)
          .then(() => {

            handleSuccessFEResponse("Đổi mật khẩu thành công!")
          })
          .catch(err => {

          })


      })
        .catch(err => {
          handleErrorFEResponse("Mật khẩu không đúng!")
        })
    }


  }

  return <>
    <div className="editprofile-container">
      <MiniSidebar />
      <CommonSidebar />
      <div className="editprofile">
        <h2>Change password</h2>
        <div className="editprofile-info">
          <div className="editprofile-flex">
            <div className="editprofile-flex__left">
              <div className="editprofile-avt">
                <img src={user.avatar ? user.avatar : avatar} alt="" />
              </div>
            </div>
            <div className="editprofile-flex__right">
              <div className="username" >
                {user.username}
              </div>

            </div>
          </div>
          <div className="editprofile-flex">
            <div className="editprofile-flex__left" >
              Current password
            </div>
            <div className="editprofile-flex__right">
              <input type="password" value={currentPw} onChange={(e) => setCurrentPw(e.target.value)} />
            </div>
          </div>
          <div className="editprofile-flex">
            <div className="editprofile-flex__left" >
              New password
            </div>
            <div className="editprofile-flex__right">
              <input type="password" value={newPw} onChange={(e) => setNewPw(e.target.value)} />
            </div>
          </div>
          <div className="editprofile-flex">
            <div className="editprofile-flex__left" >
              Retype new password
            </div>
            <div className="editprofile-flex__right">
              <input type="password" value={retypePw} onChange={(e) => setRetypePw(e.target.value)} />
            </div>
          </div>

          <div className="editprofile-flex">

            <div className="submit-btn" onClick={() => handleChangePassword()}>Submit</div>
          </div>

        </div>
      </div>
    </div>
  </>;
}

export default ChangePassword;
