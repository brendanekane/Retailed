import { combineReducers } from 'redux';
import usersReducer from 'reducers/users_reducer';
import productsReducer from 'reducers/products_reducer';
import photosReducer from 'reducers/photos_reducer';
import cartItemsReducer from 'reducers/cart_items_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  photos: photosReducer,
  cart: cartItemsReducer
});

export default entitiesReducer;
