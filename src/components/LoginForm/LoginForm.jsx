import gooseRocket from '../../assets/images/loginpage-goose-rocket.png'
import gooseRocketx2 from '../../assets/images/loginpage-goose-rocket@2x.png'
import { Formik, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';
import {
  MainContainer,
  FormContainer,
  Title,
  LabelInput,
  SpanInputEmail,
  SpanInputPass,
  EmailInput,
  ButtonSubmit,
  ButtonSignup,
  SignupContainer,
  ErrorMsg,
  CorrectMsg,
  PasswordInput,
  PasswordVisibilityIcon,
  GusContainer,
  IconButtonSubmit,
  Iconinput,
  IconButtonSubmitSpan,
} from './LoginForm.styled';
import { logInUser } from 'redux/auth/operations';
import icons from '../../assets/icons/icons.svg';
import { nanoid } from '@reduxjs/toolkit';
import { GoogleBtn } from 'buttons/GoogleBtn/GoogleBtn';

const userShema = object({
  email: string().email('This is an ERROR email').required(),
  password: string().min(6).max(100).required(),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const passwdid = nanoid();
  const emailid = nanoid();

  const [showPassword, setShowPassword] = useState(false); 

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logInUser(values))
      .then(_=> {
        resetForm();
      })
  };

  const FormError = ({ name }) => {
    return (
      <ErrorMessage name={name} render={msg => <ErrorMsg>{msg}</ErrorMsg>} />
    );
  };

  return (
    <MainContainer>
      <div>
        <FormContainer>
          <Title>Log In</Title>
          <Formik
            initialValues={initialValues}
            validationSchema={userShema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <LabelInput htmlFor={emailid}>
                  <SpanInputEmail
                    $errEmail={
                      errors.email && touched.email
                        ? '#E74A3B'
                        : touched.email
                          ? '#3CBC81'
                          : '#111'
                    }
                  >
                    Email
                  </SpanInputEmail>

                  <EmailInput
                    autoComplete="off"
                    type="email"
                    name="email"
                    id={emailid}
                    placeholder="Enter email"
                    $errEmail={
                      errors.email && touched.email
                        ? ' 1px solid #E74A3B'
                        : touched.email
                          ? '1px solid #3CBC81'
                          : '1px solid rgba(220, 227, 229, 0.6)'
                    }
                  />
                  {errors.email && touched.email ? (
                    <Iconinput>
                      <use href={`${icons}#error`} />
                    </Iconinput>
                  ) : touched.email ? (
                    <Iconinput>
                      <use href={`${icons}#done`} />
                    </Iconinput>
                  ) : null}

                  {errors.email && touched.email ? (
                    <FormError name="email" />
                  ) : touched.email ? (
                    <CorrectMsg>This is an CORRECT email</CorrectMsg>
                  ) : null}
                </LabelInput>

                <LabelInput htmlFor={passwdid}>
                  <SpanInputPass
                    $errPass={
                      errors.password && touched.password
                        ? '#E74A3B'
                        : touched.password
                          ? '#3CBC81'
                          : '#111'
                    }
                  >
                    Password
                  </SpanInputPass>

                  <PasswordInput
                    autoComplete="off"
                    type={showPassword ? 'text' : 'password'} 
                    name="password"
                    id={passwdid}
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                    $errPass={
                      errors.password && touched.password
                        ? ' 1px solid #E74A3B'
                        : touched.password
                          ? '1px solid #3CBC81'
                          : '1px solid rgba(220, 227, 229, 0.6)'
                    }
                  />
                  {showPassword ? (
                    <PasswordVisibilityIcon onClick={toggleShowPassword}>
                      <FiEye />
                    </PasswordVisibilityIcon>
                  ) : (
                    <PasswordVisibilityIcon onClick={toggleShowPassword}>
                      <FiEyeOff />
                    </PasswordVisibilityIcon>
                  )}

                  {errors.password && touched.password ? (
                    <Iconinput>
                      <use href={`${icons}#error`} />
                    </Iconinput>
                  ) : touched.password ? (
                    <Iconinput>
                      <use href={`${icons}#done`} />
                    </Iconinput>
                  ) : null}

                  <FormError name="password" />
                </LabelInput>
                <ButtonSubmit type="submit" aria-label='submit log in'>
                  <span> Log In</span>
                  <IconButtonSubmitSpan>
                    <IconButtonSubmit>
                      <use href={`${icons}#log-in`} />
                    </IconButtonSubmit>
                  </IconButtonSubmitSpan>
                </ButtonSubmit>
                <GoogleBtn>Log in with</GoogleBtn>
              </Form>
            )}
          </Formik>
        </FormContainer>

        <SignupContainer>
          <ButtonSignup aria-label='sign up' type="button" onClick={() => navigate('/register')}>
            Sign Up
          </ButtonSignup>
        </SignupContainer>
      </div>

      <GusContainer>
        <img
          srcSet={`${gooseRocket} 1x, ${gooseRocketx2} 2x`}
          alt="rocket-gus"
          height={521}
          width={368}
        />
      </GusContainer>
    </MainContainer>
  );
};

export default LoginForm;
