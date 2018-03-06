import { combineReducers } from 'redux';
import errorsReducer from 'reducers/errors_reducer';
import sessionReducer from 'reducers/session_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
});

export default rootReducer;
