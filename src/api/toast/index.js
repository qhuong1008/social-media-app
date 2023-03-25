import { toast } from "react-toastify";

//toan bo config o trong day nha
//1 nguoi lam thoi, cung nhanh, set  cai display thanh abs chac la okie
const handleSuccessResponse = (response) => {
    const messages = response.data.messages;
    console.log(messages);
    for (const message of messages) {
        // toast.dismiss();
        //toast.success(message);
        alert("thanh cong " + message);
    }
};

const handleErrorResponse = (error) => {
    try {
        const messages = error.response.data.messages;
        //toast.dismiss();
        for (const message of messages) {
            //toast.error(message);
            alert("loi " + message);
        }
    } catch {
        console.log(error);
    }
};

export { handleSuccessResponse, handleErrorResponse };
