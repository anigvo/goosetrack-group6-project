import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import AuthNavigate from 'components/AuthNavigate/AuthNavigate';
import { RegisterPageContainer } from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <RegisterPageContainer>
      <RegisterForm />
      <AuthNavigate route={'/login'} pageName={'Log in'}/>
    </RegisterPageContainer>
  );
};

export default RegisterPage;


