import { combineReducers } from 'redux';
import sessionErrorsReducer from 'reducers/session_error_reducer';
import productsErrorReducer from 'reducers/products_error_reducer'

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  products: productsErrorReducer
});

export default errorsReducer;
