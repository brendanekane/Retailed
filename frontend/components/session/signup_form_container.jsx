import { connect } from 'react-redux';
import SessionForm from 'components/session/session_form';
import { signup } from 'actions/session_actions';
import { openModal, closeModal } from 'actions/modal_actions';
import { getUsers, clearUserErrors } from 'actions/user_actions';
import { getProducts } from 'actions/product_actions';
import React from 'react';



const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'Sign Up',
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    getUsers: () => dispatch(getUsers()),
    getProducts: () => dispatch(getProducts()),
    clearUserErrors: () => dispatch(clearUserErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
