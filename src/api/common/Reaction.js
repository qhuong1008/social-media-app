import { contextInstance } from "../axios";

/**
 * Create new reaction
 * @param Reaction **Thả cảm xúc**
 *
 * - `reaction`: Cảm xúc
 */
const createReaction = async (reaction) => {
  return contextInstance.post(`common/reaction`, reaction);
};

const toggleLike = async ({ id }) => {
  console.log(id);
  return contextInstance.get(`common/post/${id}/like/toggle`);
};

/**
 * Get all reactions
 * @return
 *
 * - `reaction`: Cảm xúc
 */
const listReactions = async () => {
  return contextInstance.get(`common/reaction`);
};

/**
 * Get reaction by `id`
 * @param id id Thả cảm xúc
 * @return
 *
 * - `reaction`: Cảm xúc
 */
const getReactionById = async (id) => {
  return contextInstance.get(`common/reaction/${id}`);
};

/**
 * Update reaction by `reaction.id`
 * @param Reaction **Thả cảm xúc**
 *
 * - `reaction`: Cảm xúc
 */
const updateReaction = async (reaction) => {
  return contextInstance.put(`common/reaction/${reaction.id}`);
};

/**
 * Delete reaction by `reaction.id`
 * @param Reaction **Thả cảm xúc**
 */
const deleteReaction = async (reaction) => {
  return contextInstance.delete(`common/reaction/${reaction.id}`);
};

export {
  createReaction,
  updateReaction,
  getReactionById,
  listReactions,
  deleteReaction,
  toggleLike,
};
