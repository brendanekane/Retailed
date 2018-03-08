import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER} from 'actions/session_actions';

const sessionReducer = (state = {currentUser: null}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.currentUser});
    default:
      return state;
  }
};

export default sessionReducer;
