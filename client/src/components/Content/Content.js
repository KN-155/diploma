import React from 'react';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router-dom';

import { ListCard } from '../Parking';
import { Registration, Login } from '../Auth';
import Upload from '../Upload/Upload';
import { ViewProfile, EditProfile } from '../Profile'

const Home = () => <div>Главная</div>;
const Cabinet = () => <h2>Кабинет</h2>;

const FlexCenter = styled.div`
    display:flex;
    justify-content: center;
`;

const Container = styled.main`
    width: 800px;
      
    @media only screen and (max-width: 800px) {
        width: 100%;
    }
`;

const Content = ({ user, ...props }) => (
  <FlexCenter>
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
          <Route
            path="/profile/"
            exact
            component={() => (user ? <ViewProfile user={user} /> : <Redirect to="/login" />)}
          />
          <Route
            path="/profile/edit/"
            component={() => user ? <EditProfile user={user} editUser={props.editUser}/> : <Redirect to="/login" />}
          />
          <Route path="/" exact component={Home} />
          <Route path="/parking/" component={ListCard} />
          <Route path="/upload/" component={Upload} />
      </Container>
  </FlexCenter>
);

export default Content;
