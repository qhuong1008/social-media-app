import { toast } from "react-toastify";

const handleSuccessMessage = (message) => {
  toast.dismiss();
  toast.success(message);
};

const handleErrorMessage = (message) => {
  toast.dismiss();
  toast.error(message);
};

const handleSuccessResponse = (response) => {
  const messages = response.data.messages;
  console.log(messages);
  for (const message of messages) {
    toast.dismiss();
    toast.success(message);
  }
};

const handleErrorResponse = (error) => {
  console.log(error);
  try {
    const messages = error.response.data.messages;
    toast.dismiss();
    for (const message of messages) {
      toast.error(message);
    }
  } catch {
    console.log(error);
  }
};

const postData = {
  user: {
    username: "alice",
    img: "https://i.pinimg.com/236x/ee/2a/71/ee2a7149341c2b23ae2e9c7358ec247d.jpg",
  },
  post: {
    id: 232331212,
    content: "good morning",
  },
};
const handleSingleLikeNotification = () => {
  toast.dismiss();
  toast.info(`alice liked your photo.`);
};
const handleSingleCommentNotification = () => {
  toast.dismiss();
  toast.info(`alice commented on your post.`);
};
const handleSingleFollowNotification = () => {
  toast.dismiss();
  toast.info(`alice started following you.`);
};

export {
  handleSuccessResponse,
  handleErrorResponse,
  handleErrorMessage,
  handleSuccessMessage,
};
