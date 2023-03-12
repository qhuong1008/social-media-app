import { contextInstance } from "../axios";

/**
 * Create new userGroupMessage
 * @param UserGroupMessage **Chi tiết nhóm**
 *
 */
const createUserGroupMessage = async (userGroupMessage) => {
  return contextInstance.post(`common/user-group-message`, userGroupMessage);
};

/**
 * Get all userGroupMessages
 * @return
 *
 */
const listUserGroupMessages = async () => {
  return contextInstance.get(`common/user-group-message`);
};

/**
 * Get userGroupMessage by `id`
 * @param id id Chi tiết nhóm
 * @return
 *
 */
const getUserGroupMessageById = async (id) => {
  return contextInstance.get(`common/user-group-message/${id}`);
};

/**
 * Update userGroupMessage by `userGroupMessage.id`
 * @param UserGroupMessage **Chi tiết nhóm**
 *
 */
const updateUserGroupMessage = async (userGroupMessage) => {
  return contextInstance.put(
    `common/user-group-message/${userGroupMessage.id}`
  );
};

/**
 * Delete userGroupMessage by `userGroupMessage.id`
 * @param UserGroupMessage **Chi tiết nhóm**
 */
const deleteUserGroupMessage = async (userGroupMessage) => {
  return contextInstance.delete(
    `common/user-group-message/${userGroupMessage.id}`
  );
};

export {
  createUserGroupMessage,
  updateUserGroupMessage,
  getUserGroupMessageById,
  listUserGroupMessages,
  deleteUserGroupMessage,
};
