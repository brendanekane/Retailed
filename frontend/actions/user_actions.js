import * as UserApiUtil from 'util/user_api_util';
import { RECEIVE_CURRENT_USER } from 'actions/session_actions';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_ONE_USER = "RECEIVE_ONE_USER";
export const RECEIVE_USERS_ERRORS = 'RECEIVE_USERS_ERRORS';

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

const receiveOneUser = user => ({
  type: RECEIVE_ONE_USER,
  user
});

const updateCurrentUser = currentUser => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser
  });
};

const receiveUserErrors = error => {
  return ({
    type: RECEIVE_USERS_ERRORS,
    error
  })
}

export const getUsers = () => dispatch => {
  return UserApiUtil.getUsers()
  .then(users => dispatch(receiveUsers(users)));
};

export const getOneUser = id => dispatch => {
  return UserApiUtil.getOneUser(id)
  .then(user => dispatch(receiveOneUser(users)));
};

export const updateUser = user => dispatch => {
  return(
    UserApiUtil.updateUser(user)
    .then(user => {
      return dispatch(updateCurrentUser(user)),
      error => {
        return dispatch(receiveUserErrors(error));
      };
    })
  );
};
