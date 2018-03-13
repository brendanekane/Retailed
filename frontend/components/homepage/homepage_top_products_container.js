import React from 'react';
import { connect } from 'react-redux';
import { getProducts } from 'actions/product_actions';
import HomepageTopProducts from 'components/homepage/homepage_top_products';

const mapStateToProps = ({ session, entities }) => {
  return({
    currentUser: session.currentUser,
    products: entities.products,
    photos: entities.photos
  });
};

const mapDispatchToProps = dispatch => {
  return({
    getProducts: () => dispatch(getProducts())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageTopProducts);
