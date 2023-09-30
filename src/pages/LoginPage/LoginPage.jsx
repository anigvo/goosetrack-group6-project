import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import AuthNavigate from 'components/AuthNavigate/AuthNavigate';
import { LoginPageContainer } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginForm />
      <AuthNavigate route={'/register'} pageName={'Sign up'} />
    </LoginPageContainer>
  );
};

export default LoginPage;

