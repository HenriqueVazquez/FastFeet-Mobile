import { combineReducers } from 'redux';

// Import reducers
import auth from './auth/authState';
import user from './user/userState';

export default combineReducers({
  auth,
  user,
});
