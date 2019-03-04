import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import { createGlobalStyle } from 'styled-components';
import AppContainer from './containers/AppContainer';
import {userService} from './services';
import store from './store';
import { setUser, setAlert, finishLoading } from './actions';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

  * {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans ;
    box-sizing: inherit;
    font-size: 16px;
    line-height: 1.6;
  }
  
  a {
    text-decoration: none;
  } 
`;

(async () => {
  const localUser = JSON.parse(localStorage.getItem('user'));
  if (localUser && localUser.token) {
    axios.defaults.headers.common['Authorization'] = localUser.token;
    const {user, success, message} = await userService.relogin();
    if(user) {
      store.dispatch(setUser(user))
    }
    store.dispatch(setAlert(success,message))
  }
  store.dispatch(finishLoading())
})();



ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle/>
    <AppContainer/>
  </Provider>,
  document.getElementById('root'),
);
