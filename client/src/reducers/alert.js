import { SET_ALERT, CLOSE_ALERT } from '../actions';

export default function reducer(state = [], action) {
  switch (action.type) {
    case SET_ALERT:
      return {
        active: true,
        type: action.alertType,
        message: action.message,
      };

    case CLOSE_ALERT:
      return {
        ...state,
        active: false,
      };

    default:
      return state;
  }
}
