import * as from ActionTypes from './ActionTypes';

export const addComment = (dishId, rating, author, comment) => ({
  // action onject
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  }
});
