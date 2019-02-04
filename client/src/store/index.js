import { createStore } from 'redux';

import reducer from '../reducers';

const initialState = {
  user: {
    authorized: false,
  },
};

const store = createStore(reducer, initialState);

export default store;
