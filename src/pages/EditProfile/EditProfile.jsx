import CommonSidebar from "../../components/Sidebar/CommonSidebar/CommonSidebar";
import MiniSidebar from "../../components/Sidebar/MiniSidebar/MiniSidebar";
import styles from './EditProfile.scss'
import { useState, useEffect } from 'react'
import { updateUser } from '../../api/common/User'
import { getUserByUsername } from "../../api/common/User";
import {
  handleSuccessResponse,
  handleErrorResponse,
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


function EditProfile() {


  const user = JSON.parse(localStorage.getItem("USER_INFO"));
  const [username, setUsername] = useState(user.username);
  const [displayName, setDisplayName] = useState(user.displayName)
  const [birthday, setBirthday] = useState("")
  const [avt, setAvt] = useState(user.avatar)
  const [profile, setProfile] = useState(user.profile)
  const [gender, setGender] = useState(user.gender)

  console.log("user:", user)
  const userUpdated = {
    username: username,
    avatar: avt,
    displayName: displayName,
    birthday: birthday,
    profile: "",
    gender: gender.toUpperCase(),
    role: user.role
  }
  const resetUserInfoOnServer = () => {
    getUserByUsername(userUpdated.username).then(resp => {
      console.log("after update", JSON.stringify(resp.data.data[0]))
      localStorage.removeItem("USER_INFO")
      localStorage.setItem("USER_INFO", JSON.stringify(resp.data.data[0]))
    })
  }
  console.log("birthday length:", birthday.length)

  const handleUpdateUserProfile = () => {
    console.log("userUpdated:", userUpdated)
    updateUser(userUpdated, user.id).then(resp => {
      handleSuccessResponse(resp);
    })
      .then(resetUserInfoOnServer())
      .catch(err => {
        handleErrorResponse(err);
      })
  }

  useEffect(() => {
    if (user.birthday) {
      if (user.birthday.length > 10) {
        setBirthday(user.birthday.substring(0, 10))
      }
    }
    console.log(birthday)
  }, [])

  function handleUploadImage(e) {
    const file = e.target.files[0];
    uploadUserImg(file)
      .then((res) => {
        console.log(res.data.data)
        // form.content.images = res.data.data;
        file.previewURL = res.data.data;
        setAvt(file.previewURL);
        handleSuccessResponse(res)
      })
      .catch((err) => handleErrorResponse(err));
  }

  return <>
    <div className="editprofile-container">
      <MiniSidebar />
      <CommonSidebar />
      <div className="editprofile">
        <h2>Edit Profile</h2>
        <div className="editprofile-info">
          <div className="editprofile-flex">
            <div className="editprofile-flex__left">
              <div className="editprofile-avt">
                <img src={avt} alt="" />
              </div>
            </div>
            <div className="editprofile-flex__right">
              <div className="username" >
                {user.username}
              </div>
              {/* <label className={$.upload__input_overlay}>
                <div>
                  <input
                    style={{ display: "none" }}
                    // id={id}
                    type="file"
                    onChange={handleUploadImage}
                  />
                  <FontAwesomeIcon icon={faArrowsRotate} className="icon" />
                  <span>Change your image</span>
                </div>
              </label> */}
              <div className="change-avt-btn">

                <div>
                  <input
                    // style={{ display: "none" }}
                    type="file"
                    onChange={handleUploadImage}
                  />
                  {/* <FontAwesomeIcon icon={faArrowsRotate} className="icon" />
                  <span>Change your profile photo</span> */}
                </div>
                {/* Change your profile photo */}
              </div>
            </div>
          </div>
          <div className="editprofile-flex">
            <div className="editprofile-flex__left" >
              Username
            </div>
            <div className="editprofile-flex__right">
              <textarea rows="" cols="" value={username} onChange={(e) => setUsername(e.target.value)}></textarea>
            </div>
          </div>
          <div className="editprofile-flex">
            <div className="editprofile-flex__left" >
              Display name
            </div>
            <div className="editprofile-flex__right">
              <textarea rows="" cols="" value={displayName} onChange={(e) => setDisplayName(e.target.value)}></textarea>
            </div>
          </div>
          <div className="editprofile-flex">
            <div className="editprofile-flex__left">
              Birthday
            </div>
            <div className="editprofile-flex__right">
              <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
            </div>
          </div>
          <div className="editprofile-flex">
            <div className="editprofile-flex__left">
              Gender
            </div>
            <div className="editprofile-flex__right">
              <select name="genders" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="male">MALE</option>
                <option value="female">FEMALE</option>
                <option value="none">NONE</option>
              </select>
            </div>
          </div>
          <div className="editprofile-flex">

            <div className="submit-btn" onClick={() => handleUpdateUserProfile()}>Submit</div>
          </div>

        </div>
      </div>
    </div>
  </>;
}

export default EditProfile;
