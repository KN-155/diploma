import { combineReducers } from 'redux';

import { default as user } from './user';

const reducer = combineReducers({
  user,
});

export default reducer;
