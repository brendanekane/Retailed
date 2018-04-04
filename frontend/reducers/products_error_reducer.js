import { RECEIVE_PRODUCT_ERRORS, CLEAR_PRODUCT_ERRORS } from 'actions/product_actions';

const productsErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT_ERRORS:
      return action.errors;
    case CLEAR_PRODUCT_ERRORS:
      return [];
    default:
      return state;
  }
};

export default productsErrorReducer;
