import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "./NewPost.scss";

function NewPost() {
    return (
        <div className={$["container"]}>
            <div className={$["header"]}>Tạo bài viết mới</div>
            <hr />
            <FontAwesomeIcon icon="fa-regular fa-image" size="100" />
        </div>
    );
}

export default NewPost;
