import React from 'react';
import { connect } from 'react-redux';
import { getUserProducts } from 'actions/product_actions';
import ProfileItems from 'components/profile/profile_items';

const mapStateToProps = ({ session, entities }) => {
  return({
    currentUser: session.currentUser,
    products: entities.products,
    photos: entities.photos
  });
};

const mapDispatchToProps = dispatch => {

  return ({
    getUserProducts: user_id => dispatch(getUserProducts(user_id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileItems);
