import CommonSidebar from "../../components/Sidebar/CommonSidebar/CommonSidebar";
import MiniSidebar from "../../components/Sidebar/MiniSidebar/MiniSidebar";
import styles from './EditProfile.scss'

function EditProfile() {
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
                <img src="https://i.pinimg.com/564x/c2/e0/75/c2e075bf8c8c1faec0567269afbd76b4.jpg" alt="" />
              </div>
            </div>
            <div className="editprofile-flex__right">
              <div className="username">
                koyukichan01
              </div>
              <div className="change-avt-btn">
                Change your profile photo
              </div>
            </div>
          </div>
          <div className="editprofile-flex">
            <div className="editprofile-flex__left">
              Bio
            </div>
            <div className="editprofile-flex__right">
              <textarea rows="" cols=""></textarea>
            </div>
          </div>
          <div className="editprofile-flex">
            <div className="editprofile-flex__left">
              Gender
            </div>
            <div className="editprofile-flex__right">
              <input type="text" value="Prefer not to say" />
            </div>
          </div>
          <div className="editprofile-flex">

            <div className="submit-btn">Submit</div>
          </div>

        </div>
      </div>
    </div>
  </>;
}

export default EditProfile;
