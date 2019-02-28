import { SET_USER, LOGOUT } from '../actions';

export default function reducer(state = [], action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case LOGOUT:
      return null;
    default:
      return state;
  }
}
