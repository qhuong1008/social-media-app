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
const handleErrorFEResponse = (message) => {
  toast.error(message);
};
const handleSuccessFEResponse = (message) => {
  toast.success(message);
};
export {
  handleSuccessResponse,
  handleErrorResponse,
  handleErrorMessage,
  handleSuccessMessage,
  handleErrorFEResponse,
  handleSuccessFEResponse,
};
