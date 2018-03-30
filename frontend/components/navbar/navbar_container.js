import React from 'react';
import { connect } from 'react-redux';
import { logout, login } from 'actions/session_actions';
import navSessionLinks from 'components/navbar/navbar';
import { openModal, closeModal } from 'actions/modal_actions';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => {
  return ({
    login: (user) => dispatch(login(user)),
    openModal: (type) => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal())
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(navSessionLinks);
