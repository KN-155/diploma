export const SET_ALERT = 'SET_ALERT';
export const CLOSE_ALERT = 'CLOSE_ALERT';

export const setAlert = (success, message) => {
  return {
    type: SET_ALERT,
    success,
    message,
  };
};

export const closeAlert = () => {
  return {
    type: CLOSE_ALERT,
  };
};
