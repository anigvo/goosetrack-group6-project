import React from 'react';
import  StyledAuthNavigate from './AuthNavigate.styled';
// import { Link } from 'react-router-dom'; 

const AuthNavigate = ({ route, pageName }) => {
  return (
    <StyledAuthNavigate to={route}>
      {pageName}
    </StyledAuthNavigate>
  );
};

export default AuthNavigate; 