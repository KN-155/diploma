import { LOAD_PARKING } from '../actions';

export default function reducer(state = [], action) {
  switch (action.type) {
    case LOAD_PARKING:
      return { ...state };

    default:
      return state;
  }
}
