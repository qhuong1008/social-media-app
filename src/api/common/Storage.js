import { contextInstance } from "../axios";

/**
 * Upload an image
 * @param Image **bức hình được chọn**
 *
 * - `image`: hình ảnh
 */

const uploadImg = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  return contextInstance.post(`common/storage/img`, formData, config);
};

export { uploadImg };
