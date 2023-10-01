import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import {
    ContainerForm,
    Title,
    Span,
    InputForm,
    Button,
    InputFormMargin0,
    Error,
    Label,
    Svg,
} from './RegisterForm.styled';

import icons from '../../assets/icons/icons.svg';

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
// import Notiflix from 'notiflix';
import { useNavigate } from 'react-router-dom';

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup
        .string()
        .email()
        .matches(emailRegexp, 'email invalid')
        .required(),
    password: yup.string().min(6).required(),
});

const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    const handlerSubmit = (values, actions) => {
        dispatch(register(values));
        // Notiflix.Notify.success('You register');
        navigate('/user');
        // console.log(values);
        actions.resetForm();
    };

    return (
        <ContainerForm>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handlerSubmit}
            >
                <Form>
                    <Title>Sign Up</Title>
                    <div>
                        <Label htmlFor="">
                            <Span>Name</Span>
                            <InputForm
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                            />
                            <Error component="div" name="name" />
                        </Label>
                    </div>

                    <div>
                        <Label htmlFor="">
                            <Span>Email</Span>
                            <InputForm
                                type="email"
                                name="email"
                                placeholder="Enter email"
                            />
                            <Error component="div" name="email" />
                        </Label>
                    </div>

                    <div>
                        <Label htmlFor="">
                            <Span>Password</Span>
                            <InputFormMargin0
                                type="password"
                                name="password"
                                placeholder="Enter password"
                            />
                            <Error component="div" name="password" />
                        </Label>
                    </div>

                    <Button type="submit">
                        Sign Up
                        <Svg width="20" height="20">
                            <use href={`${icons}#log-in`} />
                        </Svg>
                    </Button>
                </Form>
            </Formik>
        </ContainerForm>
    );
};

export default RegisterForm;

// /** @jsxImportSource @emotion/react */
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import {
//   RegisterContainer,
//   Container,
//   Title,
//   StyledForm,
//   Label,
//   Input,
//   ButtonContainer,
//   Button,
//   ErrorMessage,
// } from './RegisterForm.styled';
// import { register } from 'redux/auth/operations';
// import { useNavigate } from 'react-router-dom';

// const RegisterForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [serverError, setServerError] = useState('');

//   const RegisterSchema = yup.object().shape({
//     name: yup.string().required('Name is required'),
//     email: yup
//       .string()
//       .email('Invalid email address')
//       .required('Email is required'),
//     password: yup
//       .string()
//       .min(6, 'Password must be at least 6 characters')
//       .required('Password is required'),
//   });

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       password: '',
//     },
//     validationSchema: RegisterSchema,
//     onSubmit: async (values) => {
//       try {
//         const response = await dispatch(register(values));
//         if (response.meta.requestStatus === 'fulfilled') {
//           navigate('/calendar/month');
//         } else {
//           setServerError('Registration failed. Please try again.');
//         }
//       } catch (error) {
//         setServerError('Registration failed. Please try again.');
//       }
//     },
//   });

//   return (
//     <RegisterContainer>
//       <Container>
//         <Title>Sign Up</Title>
//         <StyledForm onSubmit={formik.handleSubmit}>
//           <Label htmlFor="name">
//             Name
//             <Input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Enter your name"
//               value={formik.values.name}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               className={formik.touched.name && formik.errors.name ? 'is-invalid' : ''}
//             />
//             <ErrorMessage name="name" component="div" />
//           </Label>
//           <Label htmlFor="email">
//             Email
//             <Input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               className={formik.touched.email && formik.errors.email ? 'is-invalid' : ''}
//             />
//             <ErrorMessage name="email" component="div"  />
//           </Label>
//           <Label htmlFor="password">
//             Password
//             <Input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               className={formik.touched.password && formik.errors.password ? 'is-invalid' : ''}
//             />
//             <ErrorMessage name="password" component="div" />
//           </Label>
//           {serverError && <div className="error_message">{serverError}</div>}
//           <ButtonContainer>
//             <Button type="submit">Sign Up</Button>
//           </ButtonContainer>
//         </StyledForm>
//       </Container>
//     </RegisterContainer>
//   );
// };

// export default RegisterForm;




// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// // import {ReactComponent as LogOutIcon} from '../../assets/icons/log-out.svg';
// // import {ReactComponent as InvalidIcon} from '../../assets/icons/error.svg';
// // import {ReactComponent as ValidIcon} from '../../assets/icons/done.svg';
// import {
//   RegisterContainer,
//   Container,
//   Title,
//   StyledForm,
//   Label,
//   Input,
//   InvalidIconStyled,
//   ValidIconStyled,
//   ErrorMessageStyled,
//   Togle,
//   ButtonContainer,
//   Button,
//   SingUpIcon,
// } from './RegisterForm.styled';

