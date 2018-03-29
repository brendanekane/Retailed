import React from 'react';
import { RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT, REMOVE_PRODUCT } from 'actions/product_actions';
import { merge } from 'lodash';

const productsReducer = (state = {}, action) => {
  Object.freeze(state);
    switch (action.type) {
      case RECEIVE_ALL_PRODUCTS:
        if (action.products.products !== undefined) {
          return action.products.products;
        } else {
          return null;
        }
      case RECEIVE_PRODUCT:
        return merge({}, state, {[action.product.product.id]: action.product.product});
      case REMOVE_PRODUCT:
        let newState = merge({}, state);
        delete newState[action.id];
        return newState;
      default:
        return state;
    }
};

export default productsReducer;
