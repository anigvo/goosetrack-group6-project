import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useAuth } from 'hooks/useAuth';
import { Loader } from 'components/Loader/Loader';
import { GoogleOAuthProvider } from '@react-oauth/google';
const RegisterPage = () => {
  const { isLoadingAuth } = useAuth();
  return (
  <>
    {isLoadingAuth && <Loader />}
    <GoogleOAuthProvider clientId="<871874326899-54e1ks937ni88hrv1es4isk2509s0ejg.apps.googleusercontent.com>">
    <RegisterForm />
    </GoogleOAuthProvider>
  </>
  
  );
};

export default RegisterPage;


