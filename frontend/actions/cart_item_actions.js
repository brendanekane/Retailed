import * as CartItemApiUtil from 'util/cart_item_api_util';

export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const DELETE_ITEM = 'DELETE_ITEM';

const receiveItems = cartItems => ({
  type: RECEIVE_ITEMS,
  cartItems
})

const receiveItem = cartItem => ({
  type: RECEIVE_ITEM,
  cartItem
})

const removeItem = cartItem => ({
  type: DELETE_ITEM,
  cartItem
})


export const createItem = (productId) => dispatch => {
  return (
    CartItemApiUtil.createItem(productId)
    .then(cartItem => {
      return dispatch(receiveItem(cartItem));
    })
  );
};

export const deleteItem = id => dispatch => {
  return (
    CartItemApiUtil.deleteItem(id)
    .then(cartItem => {
      return dispatch(removeItem(cartItem));
    })
  );
};

export const getItems = () => dispatch => {
  return (
    CartItemApiUtil.getItems()
    .then(cartItems => dispatch(receiveItems(cartItems)))
  );
};

export const getItem = id => dispatch => {
  return (
    CartItemApiUtil.getItem(id)
    .then(cartItem => dispatch(receiveItem(cartItem)))
  );
};
