import React from 'react';
import  StyledAuthNavigate from './AuthNavigate.styled';

const AuthNavigate = ({ route, pageName }) => {
  return (
    <StyledAuthNavigate to={route}>
      {pageName}
    </StyledAuthNavigate>
  );
};

export default AuthNavigate;  