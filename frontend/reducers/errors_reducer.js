import { merge } from 'lodash';
import { combineReducers } from 'redux';
import sessionErrorsReducer from 'reducers/session_error_reducer';


const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
});

export default errorsReducer;
