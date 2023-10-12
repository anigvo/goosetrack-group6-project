import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import { useAuth } from 'hooks/useAuth';
import { Loader } from 'components/Loader/Loader';

const LoginPage = () => {
  const { isLoadingAuth } = useAuth();
  return (
    <>
      {isLoadingAuth && <Loader />}
     
      <LoginForm />
     
    </>
  );
};

export default LoginPage;

