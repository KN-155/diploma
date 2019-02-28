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

const Registration = ({ onRegistration }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [valid, setValid] = useState(false);
  const [validEmail, setValidEmail] = useState({});
  const [validPassword, setValidPassword] = useState({});
  const [validConfirmPassword, setValidConfirmPassword] = useState({});

  useEffect(() => onValid(), [validEmail, validPassword, validConfirmPassword]);

  const onSubmit = e => {
    e.preventDefault();
    onRegistration(email, password);
  };

  const onValid = () => {
    const _valid =
      validEmail &&
      validPassword &&
      validConfirmPassword &&
      !!email &&
      !!password &&
      !!confirmPassword;
    setValid(_valid);
  };

  const onValidEmail = () => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const _valid = pattern.test(email);
    setValidEmail(_valid);
  };

  const onValidPassword = () => {
    const _valid = password.length >= 8;
    if (confirmPassword) {
      onValidConfirmPassword();
    }
    setValidPassword(_valid);
  };

  const onValidConfirmPassword = () => {
    const _valid = confirmPassword === password && !!confirmPassword;
    setValidConfirmPassword(_valid);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormName>Регистрация</FormName>
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
      <Input
        type="password"
        placeholder=""
        errorText="Пароли должны совпадать"
        title="Подтвердить пароль"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.currentTarget.value)}
        onBlur={onValidConfirmPassword}
        valid={validConfirmPassword}
      />
      <MarginTop>
        <Link to="/login">
          <Button type="button">Вход</Button>
        </Link>
        <Button type="submit" disabled={!valid}>
          Регистрация
        </Button>
      </MarginTop>
    </Form>
  );
};

export default Registration;
