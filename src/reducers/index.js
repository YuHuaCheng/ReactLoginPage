import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './reducer_login_status';
import createReducer from './reducer_create_status';

const rootReducer = combineReducers({
  form: formReducer,
  loginStatus: loginReducer,
  createStatus: createReducer
});

export default rootReducer;
