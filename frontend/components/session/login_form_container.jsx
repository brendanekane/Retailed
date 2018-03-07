import { connect } from 'react-redux';
import SessionForm from 'components/session/session_form';
import { login } from 'actions/session_actions';
import React from 'react';


const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'Log In',
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
