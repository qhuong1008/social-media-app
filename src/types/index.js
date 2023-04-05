const BACKEND_URL = "http://localhost:8080";
const ACCESS_TOKEN_KEY_NAME = "ACCESS_TOKEN_JWT";
const USER_KEY_NAME = "USER_INFO";

const SOCKET_REGISTER_URL = `${BACKEND_URL}/ws/secured/messenger`;
const SOCKET_USER_TOPIC_PREFIX_URL = `/ws/secured/messenger/user`;

export {
    BACKEND_URL,
    ACCESS_TOKEN_KEY_NAME,
    USER_KEY_NAME,
    SOCKET_REGISTER_URL,
    SOCKET_USER_TOPIC_PREFIX_URL
};
