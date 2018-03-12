import React from 'react';
import { RECEIVE_PRODUCT, RECEIVE_ALL_PRODUCTS } from 'actions/product_actions';
import { merge } from 'lodash';

const photosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT:
      return merge({}, state, action.product.photos);
    case RECEIVE_ALL_PRODUCTS:
      return merge({}, state, action.products.photos);
    default:
      return state;
  }
};

export default photosReducer;
