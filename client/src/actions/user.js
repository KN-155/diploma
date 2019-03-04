import {userService} from '../services';
import { setAlert } from './alert';

export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';
export const EDIT_USER = 'EDIT_USER';

export const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

export const logoutUser = () => {
  userService.logout();
  return {
    type: LOGOUT,
  };
};

export const loginUser = (username, password) => {
  return async dispatch =>  {
    const {user, success, message} = await userService.login(username, password);
    if(user) {
      dispatch(setUser(user));
    }
    dispatch(setAlert(success, message));
  };
};

export const registerUser = (username, password) => {
  return async dispatch => {
    const { success, message } = await userService.registration(username, password);
    dispatch(setAlert(success, message));
    return success;
  }
};

export const editUser = (newUser) => {
  return async dispatch => {
    const {user, success, message} = await userService.editProfile(newUser);
    dispatch(setAlert(success, message));
    if(user) {
      dispatch(setUser(user));
    }
    return success;
  }
};