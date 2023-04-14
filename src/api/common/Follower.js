import { contextInstance } from "../axios";

/**
 * Create new follower
 * @param Follower **Theo dõi**
 *
 */
const createFollower = async (follower) => {
  return contextInstance.post(`common/follower`, follower);
};

/**
 * Get all followers
 * @return
 *
 */
const listFollowers = async (userid) => {
  return contextInstance.get(`common/follower/${userid}/followers`);
};

/**
 * Get all followers
 * @return
 *
 */
const listFollowing = async (userid) => {
  return contextInstance.get(`common/follower/${userid}/following`);
};

/**
 * Get follower by `id`
 * @param id id Theo dõi
 * @return
 *
 */
const getFollowerById = async (id) => {
  return contextInstance.get(`common/follower/${id}`);
};

/**
 * Update follower by `follower.id`
 * @param Follower **Theo dõi**
 *
 */
const updateFollower = async (follower) => {
  return contextInstance.put(`common/follower/${follower.id}`);
};

/**
 * Delete follower by `follower.id`
 * @param Follower **Theo dõi**
 */
const deleteFollower = async (follower) => {
  return contextInstance.delete(`common/follower/${follower.id}`);
};

const toggleFollow = async (followerId) => {
  return contextInstance.post(`common/follower/toggle`, {
    followerId
  });
}

export {
  createFollower,
  updateFollower,
  getFollowerById,
  listFollowers,
  deleteFollower,
  listFollowing,
  toggleFollow,
};
