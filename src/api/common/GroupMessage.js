import { contextInstance } from "../axios";

/**
 * Create new groupMessage
 * @param GroupMessage **Nhóm**
 *
 * - `displayName`: Tên nhóm
 */
const createGroupMessage = async (groupMessage) => {
  return contextInstance.post(`common/group-message`, groupMessage);
};

/**
 * Get all groupMessages
 * @return
 *
 * - `displayName`: Tên nhóm
 */
const listGroupMessages = async () => {
  return contextInstance.get(`common/group-message`);
};

/**
 * Get groupMessage by `id`
 * @param id id Nhóm
 * @return
 *
 * - `displayName`: Tên nhóm
 */
const getGroupMessageById = async (id) => {
  return contextInstance.get(`common/group-message/${id}`);
};

/**
 * Update groupMessage by `groupMessage.id`
 * @param GroupMessage **Nhóm**
 *
 * - `displayName`: Tên nhóm
 */
const updateGroupMessage = async (groupMessage) => {
  return contextInstance.put(`common/group-message/${groupMessage.id}`);
};

/**
 * Delete groupMessage by `groupMessage.id`
 * @param GroupMessage **Nhóm**
 */
const deleteGroupMessage = async (groupMessage) => {
  return contextInstance.delete(`common/group-message/${groupMessage.id}`);
};

export {
  createGroupMessage,
  updateGroupMessage,
  getGroupMessageById,
  listGroupMessages,
  deleteGroupMessage,
};
