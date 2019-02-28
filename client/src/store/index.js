import { createStore } from 'redux';

import reducer from '../reducers';

const initialState = {
  user: null,
  parking: {
    list: [],
  },
  alert: {
    active: false,
    type: null,
    message: null,
  },
};

const store = createStore(reducer, initialState);

export default store;
