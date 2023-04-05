import { contextInstance } from "../axios";

/**
 * Create new message
 * @param Message **Tin nhắn**
 *
 * - `content`: Nội dung tin nhắn
 */
const createMessage = async (message) => {
  return contextInstance.post(`common/message`, message);
};

/**
 * Get all messages
 * @return
 *
 * - `content`: Nội dung tin nhắn
 */
const listMessages = async () => {
  return contextInstance.get(`common/message`);
};

/**
 * Get message by `id`
 * @param id id Tin nhắn
 * @return
 *
 * - `content`: Nội dung tin nhắn
 */
const getMessageById = async (id) => {
  return contextInstance.get(`common/message/${id}`);
};

/**
 * Update message by `message.id`
 * @param Message **Tin nhắn**
 *
 * - `content`: Nội dung tin nhắn
 */
const updateMessage = async (message) => {
  return contextInstance.put(`common/message/${message.id}`);
};

/**
 * Delete message by `message.id`
 * @param Message **Tin nhắn**
 */
const deleteMessage = async (message) => {
  return contextInstance.delete(`common/message/${message.id}`);
};

/**
 * Lấy danh sách toàn bộ tin nhắn giữa mình và người dùng có id là **friendId**
 */
const getListMessageWithAnotherPerson = async(friendId) => {
  return contextInstance.post(`common/message/list-message`, {
    friendId
  });
}

export {
  createMessage,
  updateMessage,
  getMessageById,
  listMessages,
  deleteMessage,
  getListMessageWithAnotherPerson
};
