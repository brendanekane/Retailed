import { combineReducers } from 'redux';
import errorsReducer from 'reducers/errors_reducer';
import sessionReducer from 'reducers/session_reducer';
import uiReducer from 'reducers/ui_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer
});

export default rootReducer;
