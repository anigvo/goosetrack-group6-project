import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import { useAuth } from 'hooks/useAuth';
import { Loader } from 'components/Loader/Loader';
import { GoogleOAuthProvider } from '@react-oauth/google';

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

