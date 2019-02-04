import { SIGN_IN, SIGN_OUT } from '../actions';

export default function reducer(state = [], action) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, authorized: true };

    case SIGN_OUT:
      return { ...state, authorized: false };

    default:
      return state;
  }
}
