import { combineReducers } from 'redux';

import { default as user } from './user';
import { default as parking } from './parking';
import { default as alert } from './alert';

const reducer = combineReducers({
  user,
  parking,
  alert,
});

export default reducer;
