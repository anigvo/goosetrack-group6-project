import { Formik, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
// import { useMediaQuery } from 'hooks/useMediaQuery';
import { useNavigate } from 'react-router-dom';

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
  GusContainer,
  IconButtonSubmit,
  Iconinput,
  IconButtonSubmitSpan,
} from './LoginForm.styled';

import { logInUser } from 'redux/auth/operations';
import icons from '../../assets/icons/icons.svg';

const userShema = object({
  email: string().email('This is an ERROR email').required(),
  password: string().min(6).max(16).required(),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logInUser(values));
    resetForm();
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
                <LabelInput htmlFor="email">
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

                <LabelInput htmlFor="password">
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
                    type="password"
                    name="password"
                    placeholder="*******"
                    $errPass={
                      errors.password && touched.password
                        ? ' 1px solid #E74A3B'
                        : touched.password
                        ? '1px solid #3CBC81'
                        : '1px solid rgba(220, 227, 229, 0.6)'
                    }
                  />
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
                <ButtonSubmit type="submit">
                  <span> Log In</span>
                  <IconButtonSubmitSpan>
                    <IconButtonSubmit>
                    <use href={`${icons}#log-in`} />
                    </IconButtonSubmit>
                  </IconButtonSubmitSpan>
                </ButtonSubmit>
              </Form>
            )}
          </Formik>
        </FormContainer>

        <SignupContainer>
          <ButtonSignup type="button" onClick={() => navigate('/register')}>
            Sign Up
          </ButtonSignup>
        </SignupContainer>
      </div>
     
        <GusContainer>
          <img
            src={require('../../assets/images/loginpage-goose-rocket.png')}
            alt="rocket-gus"
            height={521}
            width={368}
          />
        </GusContainer>
      </MainContainer>
  );
};

export default LoginForm;
