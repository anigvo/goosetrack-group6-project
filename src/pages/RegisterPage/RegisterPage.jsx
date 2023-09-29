// const RegisterPage = () => {
//     return (
//         <h1>Register page</h1>
//     )
// }

// export default RegisterPage;

import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import AuthNavigate from 'components/AuthNavigate/AuthNavigate';
import { RegisterPageContainer } from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <RegisterPageContainer>
      <RegisterForm />
      <AuthNavigate route={'/login'} pageName={'Login'}/>
    </RegisterPageContainer>
  );
};

export default RegisterPage;


