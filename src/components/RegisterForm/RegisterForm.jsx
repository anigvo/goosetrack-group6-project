import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
// import {ReactComponent as LogOutIcon} from '../../assets/icons/log-out.svg';
// import {ReactComponent as InvalidIcon} from '../../assets/icons/error.svg';
// import {ReactComponent as ValidIcon} from '../../assets/icons/done.svg';
import {
  RegisterContainer,
  Container,
  Title,
  StyledForm,
  Label,
  Input,
  InvalidIconStyled,
  ValidIconStyled,
  ErrorMessageStyled,
  Togle,
  ButtonContainer,
  Button,
  SingUpIcon,
} from './RegisterForm.styled';

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';
// import { ROUTES } from 'utils/routes';
// import { FiEyeOff, FiEye, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';

const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const SignUpSchema = yup.object().shape({
  name: yup
    .string()
    .max(16, 'Name must be 16 characters or less.')
    .required('Name is required!'),
  email: yup
    .string()
    .max(254)
    .matches(
      emailRegExp,
      'Invalid email address. The email address must contain the @ sign.'
    )
    .required('Email is required!')
    .email('Invalid email address. The email address must contain the @ sign.'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters.')
    .max(254, 'Password is too long')
    .required('Password is required!'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [passVisible, setPasswordVisible] = useState(false);

  const changeVisible = () => {
    const input = document.getElementById('password');
    if (passVisible) {
      setPasswordVisible(false);
      input.setAttribute('type', 'password');
    } else {
      setPasswordVisible(true);
      input.setAttribute('type', 'text');
    }
  };

  const handleSubmit = async (values) => {
    const { name, email, password } = values;
    if (name || password || email) {
      const { payload } = await dispatch(register({ name, email, password }));
      if (
        payload === 'Request failed with status code 400' ||
        payload === 'Request failed with status code 401' ||
        payload === 'Request failed with status code 403' ||
        payload === 'Request failed with status code 500' ||
        payload === 'Request failed with status code 409'
      ) {
        return;
      } else {
        localStorage.setItem('firstLoad', 'true');
        // navigate(ROUTES.HOME);
      }
    } else {
      return;
    }
  };

  return (
    <RegisterContainer>
      <Container>
        <Title>Sign Up</Title>
        <Formik
          validationSchema={SignUpSchema}
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => {
            const isValid = (field) =>
              touched[field] && errors[field]
                ? 'is-invalid'
                : touched[field]
                ? 'is-valid'
                : '';
            return (
              <StyledForm>
                <Label>
                  Name
                  <Input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className={`${isValid('name')}`}
                  />
                  {isValid('name') === 'is-valid' && < ValidIconStyled />}
                  {isValid('name') === 'is-invalid' && < InvalidIconStyled />}
                  <ErrorMessageStyled
                    name="name"
                    component="div"
                    className="error_message"
                  />
                </Label>
                <Label>
                  Email
                  <Input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter email"
                    className={`${isValid('email')}`}
                  />
                  {isValid('email') === 'is-valid' && < ValidIconStyled />}
                  {isValid('email') === 'is-invalid' && <InvalidIconStyled />}
                  <ErrorMessageStyled
                    name="email"
                    component="div"
                    className="error_message"
                  />
                </Label>
                <Label last>
                  Password
                  <Input
                    type={passVisible ? 'text' : 'password'}
                    name="password"
                    required
                    placeholder="Enter password"
                    id="password"
                    className={`${isValid('password')}`}
                  />
                  <Togle onClick={changeVisible}>
                    {/* {passVisible ? <FiEye /> : <FiEyeOff />} */}
                  </Togle>
                  {isValid('password') === 'is-valid' && <InvalidIconStyled />}
                  {isValid('password') === 'is-invalid' && < InvalidIconStyled />}
                  <ErrorMessageStyled
                    name="password"
                    component="div"
                    className="error_message"
                  />
                </Label>
                <ButtonContainer>
                  <Button type="submit">
                    Sign Up
                    <SingUpIcon/>
                  </Button>
                </ButtonContainer>
              </StyledForm>
            );
          }}
        </Formik>
      </Container>
    </RegisterContainer>
  );
};

export default RegisterForm; 
