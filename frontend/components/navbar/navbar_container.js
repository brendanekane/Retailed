import React from 'react';
import { connect } from 'react-redux';
import { logout } from 'actions/session_actions';
import navSessionLinks from 'components/navbar/navbar';
import { openModal, closeModal } from 'actions/modal_actions';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (type) => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(navSessionLinks);
