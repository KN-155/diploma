import React from 'react';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router-dom';

import ListCard from '../ListCard';
import Registration from '../../components/Auth/Registration';
import Login from '../../components/Auth/Login';
import Upload from '../Upload';

const Index = () => <h2>Home</h2>;
const Cabinet = () => <h2>123</h2>;

const Container = styled.main`
  display: flex;
  justify-content: center;
`;

const Content = ({ user, ...props }) => (
  <Container>
    <Route
      path="/login/"
      component={() =>
        user ? <Redirect to="/" /> : <Login onLogin={props.loginUser} />
      }
    />
    <Route
      path="/registration/"
      component={() =>
        user ? (
          <Redirect to="/" />
        ) : (
          <Registration onRegistration={props.registerUser} />
        )
      }
    />
    <Route
      path="/cabinet/"
      component={() => (!user ? <Redirect to="/login" /> : <Cabinet />)}
    />
    <Route path="/" exact component={Index} />
    <Route path="/parking/" component={ListCard} />
    <Route path="/upload/" component={Upload} />
  </Container>
);

export default Content;
