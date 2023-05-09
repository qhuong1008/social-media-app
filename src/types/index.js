let BACKEND_URL = "http://localhost:8080";

if (process.env.NODE_ENV === "development") {
  BACKEND_URL = "http://localhost:8080";
} else {
  BACKEND_URL = "https://instagram.uteoj.com/api";
}

const ACCESS_TOKEN_KEY_NAME = "ACCESS_TOKEN_JWT";
const USER_KEY_NAME = "USER_INFO";

const SOCKET_REGISTER_URL = `${BACKEND_URL}/ws/secured`;
const SOCKET_USER_TOPIC_PREFIX_URL = `/ws/secured/messenger/user`;

export {
  BACKEND_URL,
  ACCESS_TOKEN_KEY_NAME,
  USER_KEY_NAME,
  SOCKET_REGISTER_URL,
  SOCKET_USER_TOPIC_PREFIX_URL,
};
