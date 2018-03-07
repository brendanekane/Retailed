import { combineReducers } from 'redux';
import modalReducer from 'reducers/modal_reducer';

const uiReducer = combineReducers({
  modal: modalReducer
});

export default uiReducer;
