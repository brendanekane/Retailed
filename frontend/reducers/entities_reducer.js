import { combineReducers } from 'redux';
import usersReducer from 'reducers/users_reducer';
import productsReducer from 'reducers/products_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productsReducer
});

export default entitiesReducer;
