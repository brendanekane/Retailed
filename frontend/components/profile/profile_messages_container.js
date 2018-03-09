import React from 'react';
import { connect } from 'react-redux';
import ProfileMessages from 'components/profile/profile_messages';

const mapStateToProps = ({ entities, session}) => {
  return({
    currentUser: session.currentUser,
    users: entities.users
  });
};

const mapDispatchToProps = dispatch => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileMessages);
