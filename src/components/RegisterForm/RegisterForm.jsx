import { Formik, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  MainContainer,
  FormContainer,
  Title,
  LabelInput,
  SpanInputLogin,
  SpanInputEmail,
  SpanInputPass,
  LoginInput,
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
  SubContainer,
} from './RegisterForm.styled';

import icons from '../../assets/icons/icons.svg';
import { registerUser } from 'redux/auth/operations';


const userShema = object({
  name: string().min(3).required(),
  email: string().email('This is an ERROR email').required(),
  password: string().min(6).max(16).required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
   const handleSubmit = (values, { resetForm }) => {
    dispatch(registerUser(values));
    resetForm();
  };

  const FormError = ({ name }) => {
    return (
      <ErrorMessage name={name} render={msg => <ErrorMsg>{msg}</ErrorMsg>} />
    );
  };

  return (
    <MainContainer>
      <SubContainer>
        <FormContainer>
          <Title>Sign Up</Title>
          <Formik
            initialValues={initialValues}
            validationSchema={userShema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <LabelInput htmlFor="name">
                  <SpanInputLogin
                    $errLogin={
                      errors.name && touched.name
                        ? '#E74A3B'
                        : touched.name
                        ? '#3CBC81'
                        : '#111'
                    }
                  >
                    Name
                  </SpanInputLogin>

                  <LoginInput
                    autoComplete="off"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    $errLogin={
                      errors.name && touched.name
                        ? ' 1px solid #E74A3B'
                        : touched.name
                        ? '1px solid #3CBC81'
                        : '1px solid rgba(220, 227, 229, 0.6)'
                    }
                  />
                  {errors.name && touched.name ? (
                    <Iconinput>
                     <use href={`${icons}#error`} />
                    </Iconinput>
                  ) : touched.name ? (
                    <Iconinput>
                     <use href={`${icons}#done`} />
                    </Iconinput>
                  ) : null}
                  <FormError name="name" />
                </LabelInput>

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
                    placeholder="Enter password"
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
                  <span> Sign Up </span>
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
          <ButtonSignup type="button" onClick={() => navigate('/login')}>
            Log In
          </ButtonSignup>
        </SignupContainer>
      </SubContainer>
              <GusContainer>
          <img
            src={require('../../assets/images/loginpage-goose-form.png')}
            alt="rocket-gus"
            height={416}
            width={400}
          />
        </GusContainer>
      </MainContainer>
  );
};

export default RegisterForm;