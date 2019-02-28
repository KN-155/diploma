export const SET_ALERT = 'SET_ALERT';
export const CLOSE_ALERT = 'CLOSE_ALERT';

export function setAlert(type, message) {
  return {
    type: SET_ALERT,
    alertType: type,
    message,
  };
}
export function closeAlert() {
  return {
    type: CLOSE_ALERT,
  };
}
