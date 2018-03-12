import { combineReducers } from 'redux';
import usersReducer from 'reducers/users_reducer';
import productsReducer from 'reducers/products_reducer';
import photosReducer from 'reducers/photos_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  photos: photosReducer
});

export default entitiesReducer;
