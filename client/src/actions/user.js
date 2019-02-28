import { userService } from '../services';
import { setAlert } from './alert';

export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';

export function loginUser(username, password) {
  return dispatch => {
    userService
      .login(username, password)
      .then(user => {
        dispatch(setUser(user));
        dispatch(setAlert('success', 'Вход выполнен'));
      })
      .catch(function(error) {
        dispatch(setAlert('dungarees', 'Ошибка авторизации'));
      });
  };
}

export function registerUser(username, password) {
  return dispatch => {
    userService
      .registration(username, password)
      .then(response => {
        const type = response.status === 201 ? 'success' : 'dungarees';
        dispatch(setAlert(type, response.data.message));
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

export function setUser(user) {
  return {
    type: SET_USER,
    user,
  };
}

export function logoutUser() {
  userService.logout();
  return {
    type: LOGOUT,
  };
}
