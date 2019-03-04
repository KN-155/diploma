import { combineReducers } from 'redux';

import { default as user } from './user';
import { default as parking } from './parking';
import { default as alert } from './alert';
import { default as loading } from './loading';

const reducer = combineReducers({
  user,
  parking,
  alert,
  loading
});

export default reducer;
