import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as yup from 'yup';
// import {ReactComponent as LogInIcon} from '../../assets/icons/login-icon.svg';
import {
    LoginContainer,
    Container,
    Title,
    StyledForm,
    Label,
    Input,
  //   ValidIcon,
  //   InvalidIcon,
    Togle,
    ButtonContainer,
    Button,
    LoginIcon,
    // ErrorMessageStyled
  } from './LoginForm.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { FiEyeOff, FiEye, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
// import sprite from 'images/sprite.svg';

const emailRegExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const LoginForm = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passVisible, setPasswordVisible] = useState(false);

  const token = searchParams.get('token');

  useEffect(() => {
    if (token) {
      dispatch(logIn({ token }));
    }
  }, [token, dispatch]);

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
    const { email, password } = values;
    if (password || email) {
      const { payload } = await dispatch(logIn({ email, password }));
      if (
        payload === 'Request failed with status code 400' ||
        payload === 'Request failed with status code 401' ||
        payload === 'Request failed with status code 403' ||
        payload === 'Request failed with status code 500' ||
        payload === 'Request failed with status code 409'
      ) {
        return;
      } else {
        // navigate(ROUTES.HOME);
        localStorage.setItem('firstLoad', 'true');
      }
    }
  };

  return (
    <LoginContainer>
      <Container>
        <Title>Log In</Title>
        <Formik
        //   validationSchema={LoginSchema}
          initialValues={{ email: '', password: '' }}
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
                <Label htmlFor="email">
                  Email
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    className={`input ${
                      touched.email && errors.email
                        ? 'is-invalid'
                        : touched.email && !errors.email
                        ? 'is-valid'
                        : ''
                    }`}
                  />
                  {/* {isValid('email') === 'is-valid' && <FiCheckCircle className="valid_icon" />}
                  {isValid('email') === 'is-invalid' && <FiAlertCircle className="invalid_icon" />} */}
                  <ErrorMessage name="email" component="div" className="error_message" />
                </Label>
                <Label htmlFor="password">
                  Password
                  <Input
                    type={passVisible ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    className={`input ${
                      touched.password && errors.password
                        ? 'is-invalid'
                        : touched.password && !errors.password
                        ? 'is-valid'
                        : ''
                    }`}
                  />
                  <Togle type="button" onClick={changeVisible}>
                    {/* {passVisible ? <FiEye className="togle" /> : <FiEyeOff className="togle" />} */}
                  </Togle>
                  {/* {isValid('password') === 'is-valid' && <FiCheckCircle className="valid_icon" />}
                  {isValid('password') === 'is-invalid' && <FiAlertCircle className="invalid_icon" />} */}
                  <ErrorMessage name="password" component="div" className="error_message" />
                </Label>
                <ButtonContainer>
                  <Button type="submit">
                    Log In
                    <LoginIcon/>
                  </Button>
                </ButtonContainer>
              </StyledForm>
            );
          }}
        </Formik>
      </Container>
    </LoginContainer>
  );
};

export default LoginForm;