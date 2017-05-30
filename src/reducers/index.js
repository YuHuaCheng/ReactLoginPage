import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './reducer_login_status';
import createReducer from './reducer_create_status';
import messageReducer from './reducer_message_status';
import fetchingReducer from './reducer_fetching_status';

const rootReducer = combineReducers({
  form: formReducer,
  loginStatus: loginReducer,
  createStatus: createReducer,
  messageStatus: messageReducer,
  fetchingStatus: fetchingReducer
});

export default rootReducer;
