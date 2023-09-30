// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login, loginGoogle } from 'redux/auth/operations';
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import * as yup from 'yup';
// import {
//     LoginContainer,
//     Container,
//     Title,
//     StyledForm,
//     Label,
//     Input,
//   //   ValidIcon,
//   //   InvalidIcon,
//     Togle,
//     ButtonContainer,
//     Button,
//     ErrorMessage
//   } from './LoginForm.styled';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// // import { FiEyeOff, FiEye, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
// // import sprite from 'images/sprite.svg';

// const emailRegExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// const LoginForm = () => {
//   const [searchParams] = useSearchParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [passVisible, setPasswordVisible] = useState(false);

//   const token = searchParams.get('token');

//   useEffect(() => {
//     if (token) {
//       dispatch(loginGoogle({ token }));
//     }
//   }, [token, dispatch]);

//   const changeVisible = () => {
//     const input = document.getElementById('password');
//     if (passVisible) {
//       setPasswordVisible(false);
//       input.setAttribute('type', 'password');
//     } else {
//       setPasswordVisible(true);
//       input.setAttribute('type', 'text');
//     }
//   };

//   const handleSubmit = async (values) => {
//     const { email, password } = values;
//     if (password || email) {
//       const { payload } = await dispatch(login({ email, password }));
//       if (
//         payload === 'Request failed with status code 400' ||
//         payload === 'Request failed with status code 401' ||
//         payload === 'Request failed with status code 403' ||
//         payload === 'Request failed with status code 500' ||
//         payload === 'Request failed with status code 409'
//       ) {
//         return;
//       } else {
//         // navigate(ROUTES.HOME);
//         localStorage.setItem('firstLoad', 'true');
//       }
//     }
//   };

//   return (
//     <LoginContainer>
//       <Container>
//         <Title>Log In</Title>
//         <Formik
//           initialValues={{ email: '', password: '' }}
//           validationSchema={LogInSchema}
//         >
//           {({ errors, touched }) => {
//             const isValid = field =>
//               touched[field] && errors[field]
//                 ? 'is-invalid'
//                 : touched[field]
//                 ? 'is-valid'
//                 : '';
//             return (
//               <Form className="form" onSubmit={handleSubmit}>
//                 <label className="label" htmlFor="email">
//                   Email
//                   <Field
//                     name="email"
//                     id="email"
//                     placeholder="Enter email"
//                     className={`input ${
//                       touched.email && errors.email
//                         ? 'error_input'
//                         : touched.email && !errors.email
//                         ? 'success_input'
//                         : ''
//                     }`}
//                   />
//                   {isValid('email') === 'is-valid' && (
//                     <FiCheckCircle className="valid_icon" />
//                   )}
//                   {isValid('email') === 'is-invalid' && (
//                     <FiAlertCircle className="invalid_icon" />
//                   )}
//                   <ErrorMessage
//                     name="email"
//                     component="div"
//                     className="error_message"
//                   />
//                 </label>
//                 <label className="label" htmlFor="password">
//                   Password
//                   <Field
//                     type="password"
//                     id="password"
//                     name="password"
//                     placeholder="Enter password"
//                     className={`input ${
//                       touched.password && errors.password
//                         ? 'error_input'
//                         : touched.password && !errors.password
//                         ? 'success_input'
//                         : ''
//                     }`}
//                   />
//                   <span type="button" onClick={changeVisible}>
//                     {passVisible ? (
//                       <FiEye className="togle" />
//                     ) : (
//                       <FiEyeOff className="togle" />
//                     )}
//                   </span>
//                   {isValid('password') === 'is-valid' && (
//                     <FiCheckCircle className="valid_icon" />
//                   )}
//                   {isValid('password') === 'is-invalid' && (
//                     <FiAlertCircle className="invalid_icon" />
//                   )}
//                   <ErrorMessage
//                     name="password"
//                     component="div"
//                     className="error_message"
//                   />
//                 </label>
//                 <div className="button_container">
//                   <button className="button" type="submit">
//                     Log In
//                     <svg className="icon">
//                       <use href={sprite + '#icon-log-in'}></use>
//                     </svg>
//                   </button>
//                 </div>
//               </Form>
//             );
//           }}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
