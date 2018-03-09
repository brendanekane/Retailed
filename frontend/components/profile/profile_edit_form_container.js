import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from 'actions/user_actions';
import ProfileEditForm from 'components/profile/profile_edit_form';

const mapStateToProps = ({ errors, session }) => {
  return ({
    errors,
    currentUser: session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    updateUser: user => dispatch(updateUser(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEditForm);
