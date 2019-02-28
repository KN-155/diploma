import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Input from '../../FormElements/Input';
import Button from '../../FormElements/Button';

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-self: center;
  margin-top: 50px;
`;

const MarginTop = styled.div`
  margin-top: 20px;
`;

const FormName = styled.label`
  margin-bottom: 20px;
`;

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);
  const [validEmail, setValidEmail] = useState({});
  const [validPassword, setValidPassword] = useState({});

  useEffect(() => onValid(), [validEmail, validPassword]);

  const onSubmit = e => {
    e.preventDefault();
    onLogin(email, password);
  };

  const onValid = () => {
    const _valid = validEmail && validPassword && !!email && !!password;
    setValid(_valid);
  };

  const onValidEmail = () => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const _validEmail = pattern.test(email);
    setValidEmail(_validEmail);
  };

  const onValidPassword = () => {
    const _validPassword = password.length >= 8;
    setValidPassword(_validPassword);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormName>Вход</FormName>
      <Input
        type="email"
        placeholder="test@test.by"
        errorText="E-mail должен быть действительным"
        title="Email"
        value={email}
        onChange={e => {
          setEmail(e.currentTarget.value);
        }}
        onBlur={onValidEmail}
        valid={validEmail}
      />
      <Input
        type="password"
        placeholder=""
        errorText="Пароль должны содержать не менее 8-ми символов"
        title="Пароль"
        value={password}
        onChange={e => setPassword(e.currentTarget.value)}
        onBlur={onValidPassword}
        valid={validPassword}
      />
      <MarginTop>
        <Link to="/registration">
          <Button type="button">Регистрация</Button>
        </Link>
        <Button type="submit" disabled={!valid}>
          Вход
        </Button>
      </MarginTop>
    </Form>
  );
};

export default Login;
