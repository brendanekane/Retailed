import { connect } from 'react-redux';
import SessionForm from 'components/session/session_form';
import { login } from 'actions/session_actions';
import React from 'react';
import { openModal, closeModal } from 'actions/modal_actions';
import { getUsers } from 'actions/user_actions';
import { getProducts } from 'actions/product_actions';


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
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    getUsers: () => dispatch(getUsers()),
    getProducts: () => dispatch(getProducts())

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
