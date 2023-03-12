import { contextInstance } from "../axios";

/**
 * Create new announce
 * @param Announce **Thông báo**
 *
 * - `content`: Nội dung
 * - `seen`: Đã xem
 */
const createAnnounce = async (announce) => {
  return contextInstance.post(`common/announce`, announce);
};

/**
 * Get all announces
 * @return
 *
 * - `content`: Nội dung
 * - `seen`: Đã xem
 */
const listAnnounces = async () => {
  return contextInstance.get(`common/announce`);
};

/**
 * Get announce by `id`
 * @param id id Thông báo
 * @return
 *
 * - `content`: Nội dung
 * - `seen`: Đã xem
 */
const getAnnounceById = async (id) => {
  return contextInstance.get(`common/announce/${id}`);
};

/**
 * Update announce by `announce.id`
 * @param Announce **Thông báo**
 *
 * - `content`: Nội dung
 * - `seen`: Đã xem
 */
const updateAnnounce = async (announce) => {
  return contextInstance.put(`common/announce/${announce.id}`);
};

/**
 * Delete announce by `announce.id`
 * @param Announce **Thông báo**
 */
const deleteAnnounce = async (announce) => {
  return contextInstance.delete(`common/announce/${announce.id}`);
};

export {
  createAnnounce,
  updateAnnounce,
  getAnnounceById,
  listAnnounces,
  deleteAnnounce,
};
