import { Link } from "react-router-dom";
import { useCallback, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowsRotate,
  faEarthAsia,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import clx from "classnames";

import $ from "./PostForm.module.scss";
import { useId, useState, useEffect } from "react";
import { Switch } from "../form/switch";
import { PopupContext } from "../../App";

import { uploadImg } from "../../api/common/Storage";
import {
  INTERFACE_TI_POST_CONTENT,
  createPost,
  updatePost,
} from "../../api/common/Post";
import { handleErrorResponse, handleSuccessResponse } from "../../api/toast";
import TagModal from "../TagModal/TagModal";
import avatar from "../../assets/img/avt.jpg";
const STATE_VAR = {
  upload_image: "UPLOAD_IMAGE",
  fill_form: "FILL_FORM",
};
function NewPost({ post }) {
  const user = JSON.parse(localStorage.getItem("USER_INFO"));

  const [openTagModal, setOpenTagModal] = useState(false);
  const [taggedList, setTaggedList] = useState([]);
  const [count, setCount] = useState(0);

  const [usertest, setUsertest] = useState("ban dau");
  const callBackFunction = (childData) => {
    setTaggedList(childData);
    setCount(count + 1);
    console.log("taggedList:", taggedList);
  };

  taggedList.map((user) => {
    console.log(user.username);
  });
  const { togglePopupContentLevel, setPopupContentLevel } =
    useContext(PopupContext);

  const setPopupcontent = (content) => {
    setPopupContentLevel(0, content);
  };

  const togglePopup = () => {
    togglePopupContentLevel(post ? 2 : 0);
  };
  const isCreated = post != null ? true : false;

  const id = useId();
  const [state, setState] = useState(STATE_VAR.upload_image);
  const [form, setForm] = useState({
    id: null,
    isPublic: false,
    content: { images: null, caption: "" },
  });
  const [avt, setAvt] = useState();
  const [caption, setCaption] = useState("");

  const POST_PRIVACY_TYPE = {
    PUBLIC: "PUBLIC",
    PRIVATE: "PRIVATE",
  };

  useEffect(() => {
    if (isCreated) {
      console.log("%c this form for upload ", "color: green; font-size: 20px;");
      form.id = post.id;
      form.isPublic = post.privacy === POST_PRIVACY_TYPE.PUBLIC ? true : false;
      const content = JSON.parse(post.content).data;
      form.content = content;
      setAvt(content.images);
      setCaption(content.contents.join("\n"));
    } else {
      console.log(
        "%c this form for creeate ",
        "color: green; font-size: 20px;"
      );
    }
  }, []);
  useEffect(() => {
    return () => avt && URL.revokeObjectURL(avt.previewURL);
  }, [avt]);

  function togglePublic() {
    setForm((p) => ({ ...p, isPublic: !p.isPublic }));
  }

  /**
   * Call when upload image
   * @param e
   */
  function handleUploadImage(e) {
    const file = e.target.files[0];
    uploadImg(file)
      .then((res) => {
        form.content.images = res.data.data;
        file.previewURL = res.data.data;
        setAvt(file.previewURL);
      })
      .catch((err) => handleErrorResponse(err));
  }

  /**
   * Call when submit
   */
  const submit = () => {
    form.content.caption = caption;
    const preparedFormContent = { ...INTERFACE_TI_POST_CONTENT };
    preparedFormContent.data.images = [form.content.images];
    preparedFormContent.data.contents = form.content.caption.split("\n");
    form.content = { ...preparedFormContent };
    if (isCreated) {
      togglePopupContentLevel(2);
      updatePost(form)
        .then((resp) => handleSuccessResponse(resp))
        .catch((err) => handleErrorResponse(err));
    } else {
      togglePopup();
      createPost(form)
        .then((resp) => handleSuccessResponse(resp))
        .catch((err) => handleErrorResponse(err));
    }
  };

  const formHandler = () => {
    if (currentHeaderTitle === HEADER_TITLE_VALUE_TYPE.BTN_NEXT) {
      setState(STATE_VAR.fill_form);
      setCurrentHeaderTitle(HEADER_TITLE_VALUE_TYPE.BTN_SHARE);
    } else {
      submit();
    }
  };

  const HEADER_TITLE_VALUE_TYPE = {
    BTN_NEXT: "next",
    BTN_SHARE: "share",
  };

  const [currentHeaderTitle, setCurrentHeaderTitle] = useState(
    HEADER_TITLE_VALUE_TYPE.BTN_NEXT
  );
  // useEffect(() => {
  //   setPopupcontent(<TagModal />);
  // }, []);
  return (
    <div className={$.container}>
      <div className={$.container__header}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={clx("icon")}
          onClick={() => togglePopupContentLevel(post ? 2 : 0)}
        />
        <span>Image Upload</span>
        <button>
          {
            <span
              onClick={() => {
                formHandler();
              }}
            >
              {currentHeaderTitle}
            </span>
          }
        </button>
      </div>
      <div
        className={clx($.container__body, {
          [$.show_form]: state === STATE_VAR.fill_form,
        })}
      >
        <div className={$.upload_wrap}>
          <div
            className={$.upload}
            onClick={() => {
              setOpenTagModal((p) => !p);
            }}
          >
            {avt ? (
              <>
                <img src={avt} alt="" />
                <label className={$.upload__input_overlay}>
                  <div>
                    <input
                      style={{ display: "none" }}
                      id={id}
                      type="file"
                      onChange={handleUploadImage}
                    />
                    <FontAwesomeIcon icon={faArrowsRotate} className="icon" />
                    <span>Change your image</span>
                  </div>
                </label>
              </>
            ) : (
              <>
                <svg
                  className={$.upload__icon}
                  aria-label="Icon to represent media such as images or videos"
                  class="x1lliihq x1n2onr6"
                  color="rgb(38, 38, 38)"
                  fill="rgb(38, 38, 38)"
                  height="77"
                  role="img"
                  viewBox="0 0 97.6 77.3"
                  width="96"
                >
                  <title>
                    Icon to represent media such as images or videos
                  </title>
                  <path
                    d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className={$.upload__title}>
                  Upload photos and videos here
                </span>
                <label className={$.upload__input}>
                  Select from computer
                  <input
                    style={{ display: "none" }}
                    id={id}
                    type="file"
                    onChange={handleUploadImage}
                  />
                </label>
              </>
            )}
          </div>
          {openTagModal && <TagModal callBackFunction={callBackFunction} />}
          <div
            className={clx($.form, {
              [$.form_show]: state === STATE_VAR.fill_form,
            })}
          >
            <div className={$.user}>
              <img
                className={$.avt}
                src={user.avatar !== null ? user.avatar : avatar}
                alt="username"
              />
              <div className="username">
                {user.displayName != null ? user.displayName : user.username}
              </div>
            </div>
            <div className={$.form__content}>
              <textarea
                rows="4"
                value={caption}
                onChange={(e) => {
                  setCaption(e.target.value);
                }}
              />
            </div>
            <div className={$.form__public}>
              <span>
                <FontAwesomeIcon icon={faEarthAsia} className="icon" />
                <span>Công khai</span>
              </span>
              <Switch active={form.isPublic} toggleActive={togglePublic} />
            </div>
            <div className={$.form__tag}>
              <FontAwesomeIcon icon={faTag} className="icon" />
              <div className={$.form__taglist}>
                {/* <div className={$.form__user}>hihi</div> */}
                {taggedList.length === 0 ? (
                  <>ko co user nao dau</>
                ) : (
                  <>co user ma ?</>
                )}
                {taggedList.map((user) => {
                  return (
                    <div className={$.form__user}>
                      <a href={`/profile/${user.username}`}>
                        <div>{user.username}</div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
