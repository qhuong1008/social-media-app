import { useStompClient, useSubscription } from "react-stomp-hooks"
import { handleSuccessMessage } from "../../api/toast";
import { USER_KEY_NAME } from "../../types";

const Notification = (props) => {
    /**
     * Lấy thông tin user đang đăng nhập hiện tại trong localStorage
     * @returns user JSON
     */
    const getCurrentLogedInUser = () => {
        if (localStorage.getItem(USER_KEY_NAME) == null) return null;
        try {
            const user = JSON.parse(localStorage.getItem(USER_KEY_NAME));
            return user;
        } catch (e) {
            return null;
        }
    };

    /**
     * Thông tin user đang đăng nhập hiện tại:
     *   - **id**: id người dùng
     *   - **username**: tên đăng nhập
     *   - **displayName**: tên hiển thị ra ngoài
     */
    const currentLoginedUser = getCurrentLogedInUser();

    useSubscription('/ws/secured/announce/user-' + currentLoginedUser?.id, (message) => {
        const bodyJson = JSON.parse(message.body);
        handleSuccessMessage(bodyJson.message)
    })

    return (
        <>
        </>
    )
}

export default Notification
