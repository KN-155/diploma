import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createGlobalStyle } from 'styled-components';
import App from './components/App';
import store from './store';

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

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root'),
);
