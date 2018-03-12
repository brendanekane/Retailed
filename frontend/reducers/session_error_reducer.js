import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from 'actions/session_actions';
import { RECEIVE_USERS_ERRORS } from 'actions/user_actions';

const sessionErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_USERS_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default sessionErrorReducer;
