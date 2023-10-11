import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useAuth } from 'hooks/useAuth';
import { Loader } from 'components/Loader/Loader';

const RegisterPage = () => {
  const { isLoadingAuth } = useAuth();
  return (
  <>
    {isLoadingAuth && <Loader />}
    
    <RegisterForm />
    
  </>
  
  );
};

export default RegisterPage;


