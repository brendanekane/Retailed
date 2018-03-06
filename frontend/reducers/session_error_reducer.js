import { merge } from 'lodash';
import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from 'actions/session_actions';

const sessionErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return merge([], state, action.errors);
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default sessionErrorReducer;
