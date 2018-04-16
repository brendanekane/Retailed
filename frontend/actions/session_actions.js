import * as SessionApiUtil from 'util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => (
  SessionApiUtil.signup(user)
  .then(user => (dispatch(receiveCurrentUser(user))),
  err => (dispatch(receiveSessionErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => {
  return (
    SessionApiUtil.login(user)
    .then(user => (dispatch(receiveCurrentUser(user))),
    err => (dispatch(receiveSessionErrors(err.responseJSON))
    ))
  );
};

export const logout = () => dispatch => (
  SessionApiUtil.logout()
  .then(user => (dispatch(receiveCurrentUser(null))
  ))
);
