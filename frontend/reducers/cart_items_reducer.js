import { RECEIVE_ITEM, RECEIVE_ITEMS, DELETE_ITEM } from 'actions/cart_item_actions';
import { merge } from 'lodash';

const cartItemsReducer = (state = {}, action) => {
  Object.freeze(state);
    switch (action.type) {
      case RECEIVE_ITEMS:
        return action.cartItems;
      case RECEIVE_ITEM:
        return merge({}, state, {[action.cartItem.id]: action.cartItem});
      case DELETE_ITEM:
        let newState = merge({}, state);
        delete newState[action.cartItem.id];
        return newState;
      default:
        return state;
    }
};

export default cartItemsReducer;
