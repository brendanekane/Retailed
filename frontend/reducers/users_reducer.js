import React from 'react';
import { RECEIVE_USERS, RECEIVE_ONE_USER } from 'actions/user_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_ONE_USER:
      return merge({}, state, {[action.user.id]: action.user});
    default:
      return state;
  }
};

export default usersReducer;
