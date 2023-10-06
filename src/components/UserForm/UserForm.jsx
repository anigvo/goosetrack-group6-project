// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { Field, Form, Formik } from 'formik';
// // import DatePicker from 'react-datepicker';
// // import 'react-datepicker/dist/react-datepicker.css';
// import { ReactComponent as IconDown } from '../../assets/icons/chevron-down.svg';

// import {AddAvatarContainer, AvatarContainer, AvatarBox, AddImageBox, AddImage, UserInfo, UserName, Position, Form, Input, Button, InputTitle, ContainerInputs, BoxAllInputs, BoxInput } from './UserForm.styled';
// // import user from '../../assets/icons/user.svg';
// // import addAvatar from '../../assets/icons/add-avatar.svg';
// // import { DatePickerCustom } from 'components/DatePickerCustom/DatePickerCustom';
// import { userFormValidation } from './constans/userFormValidation';
// import { useEffect, useState } from 'react';
// import { SaveChangesBtn } from '../../buttons/SaveChangesBtn/SaveChangesBtn';
// import { CustomFormInput } from './constans/CustomFormInput';
// import './custom-datepicker.css';

// import { useDispatch, useSelector } from 'react-redux';
// import { selectIsLoadingAuth, selectUser } from '../../redux/selectors';
// import { format } from 'date-fns';
// import { editData, updateAvatar } from '../../redux/account/operations';
// import { Notify } from 'notiflix';
// import { Avatar } from 'components/Avatar/Avatar';

// export const UserForm = () => {
//    const dispatch = useDispatch();
//   const userInfo = useSelector(selectUser);
//   const loading = useSelector(selectIsLoadingAuth);

//   const [isFormChanged, setIsFormChanged] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   const initialValues = {
//     userName: userInfo.userName || '',
//     birthday: userInfo.birthday ? new Date(userInfo.birthday) : new Date(),
//     phone: userInfo.phone || '',
//     skype: userInfo.skype || '',
//     email: userInfo.email || '',
//   };

//   useEffect(() => {
//     setIsLoading(false);
//   }, [loading]);

//   const handleSubmit = (values, { resetForm, setFieldValue }) => {
//     values.birthday = format(values.birthday, 'yyyy-MM-dd');

//     try {
//       dispatch(editData(values));
//       setIsFormChanged(false);
//       resetForm();
//     } catch (error) {
//       console.error('Registration', error);
//     }
//   };
//     return (
//         <>
//             <Formik
//                 initialValues={initialValues}
//                 validationSchema={userFormValidation}
//                 onSubmit={handleSubmit}
//             >
//                 {({ setFieldValue, errors, touched, values, dirty, setTouched }) => {
//             <Form autoComplete="off">
//                 <AddAvatarContainer>
//                     <AvatarContainer>
//                         <AvatarBox>
//                                 <Avatar />
//                                  {/* <AvatarUploadContainer> */}
//                                 <Field
//                                     id="avatarUrl"
//                                     name="avatarUrl"
//                                     type="file"
//                                     accept="image/*,.png,.jpg,.gif"
//                                     onChange={e => {
//                                     const file = e.target.files[0];

//                                     if (file) {
//                                         const maxSizeInBytes = 600 * 1024;
//                                         if (file.size > maxSizeInBytes) {
//                                         Notify.failure(
//                                             'The uploaded file is too large. The maximum size is 600 KB.'
//                                         );
//                                         e.target.value = null;
//                                         return;
//                                         }
//                                     }

//                                     const formData = new FormData();
//                                     formData.append('avatar', file);

//                                     try {
//                                         dispatch(updateAvatar(formData));
//                                     } catch (error) {
//                                         setIsFormChanged(false);
//                                     }
//                                     }}
//                                     style={{ display: 'none' }}
//                                 />
//                             <AvatarUploadBtn htmlFor="avatarUrl">
//                                 <UpdateIcon />
//                             </AvatarUploadBtn>
//                     {/* </AvatarUploadContainer> */}
//                         </AvatarBox>
//                         {/* <AddImageBox>
//                             <AddImage src={addAvatar} alt="" />
//                         </AddImageBox> */}

//                     </AvatarContainer>

//                     <UserInfo>
//                         <UserName>Nadiia Doe </UserName>
//                         <Position>User</Position>
//                     </UserInfo>
//                 </AddAvatarContainer>

//                 <UserForm>
//                     <BoxAllInputs>
//                         <ContainerInputs>
//                             <BoxInput>
//                                 <InputTitle>User Name</InputTitle>
//                                 <Input
//                                     type="text"
//                                     name="name"
//                                     required
//                                     placeholder="Your name"
//                                     value={userName}
//                                     onChange={(e) => setUserName(e.target.value)}/>
//                             </BoxInput>

//                             <BoxInput>

//                                 <InputTitle>Birthday</InputTitle>
//                                 <Input
//                                     // type="date"
//                                     type="date"
//                                     id="date"
//                                     name="date"
//                                     value={birthday}
//                                     onChange={(e) => setBirthday(e.target.value)}/>
//                                 {/* <DatePickerCustom/> */}
//                             </BoxInput>
//                             {/* <DatePickerCustom/> */}

//                             <BoxInput>
//                                 <InputTitle>Email</InputTitle>
//                                 <Input
//                                     type="email"
//                                     name="email"
//                                     placeholder="Your email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}/>
//                             </BoxInput>

//                         </ContainerInputs>
//                         <ContainerInputs>
//                             <BoxInput>
//                                 <InputTitle>Phone</InputTitle>
//                                 <Input
//                                     type="tel"
//                                     name="number"
//                                     pattern="\+?\d{1,4}?[ .-\s]?\(?\d{1,3}?\)?[ .-\s]?\d{1,4}[ .-\s]?\d{1,4}[ .-\s]?\d{1,9}"
//                                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                                     //   onChange={handleNumberChange}
//                                     label="Number"
//                                     id="outlined-textarea"
//                                     placeholder="Add a phone number"

//                                     //   value={formData.number}
//                                     />
//                             </BoxInput>

//                             <BoxInput>
//                                 <InputTitle>Skype</InputTitle>
//                                 <Input
//                                 name="text"
//                                 placeholder="Add a skype number"
//                                 value={skype}
//                                 onChange={(e) => setSkype(e.target.value)}
//                                 />
//                             </BoxInput>
//                         </ContainerInputs>
//                     </BoxAllInputs>

//                 </UserForm>
//                 <Button type="submit" disabled={!isFormDirty}>
//                     Save changes
//                 </Button>
//             </Form>
//             }}
//         </Formik>
//         </>
//   );
// };
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Field, Form, Formik } from 'formik';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import user from '../../assets/icons/user.svg';
import addAvatar from '../../assets/icons/add-avatar.svg';

import {
  AvatarContainer,
  AvatarUploadBtn,
  AvatarUploadContainer,
  Feedback,
  FormInput,
  InvalidFeedback,
  InvalidInputIcon,
  Label,
  LabelText,
  UpdateIcon,
  UserAvatar,
  UserFormWrap,
  UserName,
  UserRole,
  UserSection,
  ValidFeedback,
  ValidInputIcon,
  ValidationIcon,
  DataIconWrap,
  BoxAllInputs,
  ContainerInputs,
  BoxInput,
  IconDown,
  ContainerForm,
} from './UserForm.styled';
import { userFormValidation } from './constans/userFormValidation';
import { useState } from 'react';
import { SaveChangesBtn } from '../../buttons/SaveChangesBtn/SaveChangesBtn';
import { CustomFormInput } from './constans/CustomFormInput';
import './custom-datepicker.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors';
import { format } from 'date-fns';
import { editData, updateAvatar } from '../../redux/account/operations';
import { Notify } from 'notiflix';
import { Avatar } from 'components/Avatar/Avatar';
// import { DatePickerCustom } from 'components/DatePickerCustom/DatePickerCustom';
// import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
// import { getIsLoading } from 'redux/auth/authSlice';

export const UserForm = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  //   const loading = useSelector(selectIsLoadingAuth);

  const [isFormChanged, setIsFormChanged] = useState(false);
  //   const [isLoading, setIsLoading] = useState(true);

  const initialValues = {
    userName: userInfo.userName || '',
    birthday: userInfo.birthday ? new Date(userInfo.birthday) : new Date(),
    phone: userInfo.phone || '',
    skype: userInfo.skype || '',
    email: userInfo.email || '',
  };

  //   useEffect(() => {
  //     setIsLoading(false);
  //   }, [loading]);

  const handleSubmit = (values, { resetForm, setFieldValue }) => {
    values.birthday = format(values.birthday, 'yyyy-MM-dd');

    try {
      dispatch(editData(values));
      setIsFormChanged(false);
      resetForm();
    } catch (error) {
      console.error('Registration', error);
    }
  };

  return (
    <UserSection>
      <Formik
        initialValues={initialValues}
        validationSchema={userFormValidation}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, errors, touched, values, dirty, setTouched }) => {
          return (
            <Form autoComplete="off">
              <ContainerForm>
                <AvatarContainer>
                  <UserAvatar>
                    <Avatar />
                    <AvatarUploadContainer>
                      <Field
                        id="avatarUrl"
                        name="avatarUrl"
                        type="file"
                        accept="image/*,.png,.jpg,.gif"
                        onChange={e => {
                          const file = e.target.files[0];

                          if (file) {
                            const maxSizeInBytes = 600 * 1024;
                            if (file.size > maxSizeInBytes) {
                              Notify.failure(
                                'The uploaded file is too large. The maximum size is 600 KB.'
                              );
                              e.target.value = null;
                              return;
                            }
                          }

                          const formData = new FormData();
                          formData.append('avatar', file);

                          try {
                            dispatch(updateAvatar(formData));
                          } catch (error) {
                            setIsFormChanged(false);
                          }
                        }}
                        style={{ display: 'none' }}
                      />

                      <AvatarUploadBtn htmlFor="avatarUrl">
                        <UpdateIcon />
                      </AvatarUploadBtn>
                    </AvatarUploadContainer>
                  </UserAvatar>

                  <UserName>{userInfo.userName || 'User Name'}</UserName>
                  <UserRole>User</UserRole>
                </AvatarContainer>

                <UserFormWrap>
                  <BoxAllInputs>
                    <ContainerInputs>
                      <BoxInput>
                        <Label htmlFor="userName">
                          <LabelText
                            status={
                              errors.userName && touched.userName
                                ? 'error'
                                : touched.userName
                                ? 'valid'
                                : 'default'
                            }
                          >
                            User Name
                          </LabelText>
                          <FormInput
                            id="userName"
                            type="text"
                            name="userName"
                            placeholder="User name"
                            status={
                              errors.userName && touched.userName
                                ? 'error'
                                : touched.userName
                                ? 'valid'
                                : 'default'
                            }
                          />
                          {touched.userName && (
                            <ValidationIcon>
                              {errors.userName ? (
                                <InvalidInputIcon />
                              ) : (
                                <ValidInputIcon />
                              )}
                            </ValidationIcon>
                          )}
                          <Feedback>
                            {touched.userName && !errors.userName ? (
                              <ValidFeedback>
                                User name is correct
                              </ValidFeedback>
                            ) : (
                              <InvalidFeedback
                                name="userName"
                                component="div"
                              />
                            )}
                          </Feedback>
                        </Label>
                      </BoxInput>
                      <BoxInput>
                        <Label htmlFor="birthday">
                          <LabelText
                            style={touched.birthday && { color: '#3cbc81' }}
                          >
                            Birthday
                          </LabelText>
                          <FormInput
                            id="birthday"
                            type="text"
                            name="birthday"
                            style={
                              touched.birthday && {
                                border: '1px solid #3CBC81',
                              }
                            }
                            onChange={e => {
                              setFieldValue('birthday', e);
                              setTouched({ ...touched, birthday: true });
                            }}
                            component={({ field, form, ...props }) => {
                              return (
                                //   <PeriodPaginator/>
                                //   <DatePickerCustom
                                //       selectedDate={values.birthday}
                                //     setSelectedDate={date => setFieldValue('birthday', date)}
                                //     // selectedDate={selectedDate}
                                //     // setSelectedDate={setSelectedDate}
                                //     // filterMonth={filterMonth}
                                //     // setFilterMonth={setFilterMonth}
                                //     // filterYear={filterYear}
                                //     // setFilterYear={setFilterYear}
                                //     // handlePrevMonth={handlePrevMonth}
                                //     // handleNextMonth={handleNextMonth}
                                //     // changePeriod={changePeriod}
                                //     // pickHandler={pickHandler}
                                //     />
                                <DatePicker
                                  calendarStartDay={1}
                                  dropdownMode="select"
                                  yearDropdownItemNumber={100}
                                  scrollableYearDropdown
                                  selected={new Date(values.birthday)}
                                  dateFormat="dd/MM/yyyy"
                                  maxDate={new Date()}
                                  {...field}
                                  {...props}
                                />
                              );
                            }}
                          />
                          {touched.birthday ? (
                            <ValidationIcon>
                              <ValidInputIcon />
                            </ValidationIcon>
                          ) : (
                            <DataIconWrap>
                              <IconDown />
                            </DataIconWrap>
                          )}
                          <Feedback>
                            {touched.birthday && (
                              <ValidFeedback>
                                User birthday is selected
                              </ValidFeedback>
                            )}
                          </Feedback>
                        </Label>
                      </BoxInput>
                      <BoxInput>
                        <Label htmlFor="email">
                          <LabelText
                            status={
                              errors.email && touched.email
                                ? 'error'
                                : touched.email
                                ? 'valid'
                                : 'default'
                            }
                          >
                            Email
                          </LabelText>
                          <FormInput
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            status={
                              errors.email && touched.email
                                ? 'error'
                                : touched.email
                                ? 'valid'
                                : 'default'
                            }
                          />
                          {touched.email && (
                            <ValidationIcon>
                              {errors.email ? (
                                <InvalidInputIcon />
                              ) : (
                                <ValidInputIcon />
                              )}
                            </ValidationIcon>
                          )}
                          <Feedback>
                            {touched.email && !errors.email ? (
                              <ValidFeedback>
                                User email is correct
                              </ValidFeedback>
                            ) : (
                              <InvalidFeedback name="email" component="div" />
                            )}
                          </Feedback>
                        </Label>
                      </BoxInput>
                    </ContainerInputs>
                    <ContainerInputs>
                      {' '}
                      <BoxInput>
                        <Label htmlFor="phone">
                          <LabelText
                            status={
                              errors.phone && touched.phone
                                ? 'error'
                                : touched.phone
                                ? 'valid'
                                : 'default'
                            }
                          >
                            Phone
                          </LabelText>
                          <FormInput
                            id="phone"
                            type="phone"
                            name="phone"
                            placeholder="Enter your phone"
                            component={CustomFormInput}
                            status={
                              errors.phone && touched.phone
                                ? 'error'
                                : touched.phone
                                ? 'valid'
                                : 'default'
                            }
                          />
                          {touched.phone && (
                            <ValidationIcon>
                              {errors.phone ? (
                                <InvalidInputIcon />
                              ) : (
                                <ValidInputIcon />
                              )}
                            </ValidationIcon>
                          )}
                          <Feedback>
                            {touched.phone && !errors.phone ? (
                              <ValidFeedback>
                                User phone is correct
                              </ValidFeedback>
                            ) : (
                              <InvalidFeedback name="phone" component="div" />
                            )}
                          </Feedback>
                        </Label>
                      </BoxInput>
                      <BoxInput>
                        <Label htmlFor="skype">
                          <LabelText
                            status={
                              errors.skype && touched.skype
                                ? 'error'
                                : touched.skype
                                ? 'valid'
                                : 'default'
                            }
                          >
                            Skype
                          </LabelText>
                          <FormInput
                            id="skype"
                            type="text"
                            name="skype"
                            placeholder="Add a skype number"
                            status={
                              errors.skype && touched.skype
                                ? 'error'
                                : touched.skype
                                ? 'valid'
                                : 'default'
                            }
                          />
                          {touched.skype && (
                            <ValidationIcon>
                              {errors.skype ? (
                                <InvalidInputIcon />
                              ) : (
                                <ValidInputIcon />
                              )}
                            </ValidationIcon>
                          )}
                          <Feedback>
                            {touched.skype && !errors.skype ? (
                              <ValidFeedback>
                                User skype is correct
                              </ValidFeedback>
                            ) : (
                              <InvalidFeedback name="skype" component="div" />
                            )}
                          </Feedback>
                        </Label>
                      </BoxInput>
                    </ContainerInputs>
                  </BoxAllInputs>
                </UserFormWrap>

                <SaveChangesBtn isChanged={!dirty && !isFormChanged}>
                  Save Changes
                </SaveChangesBtn>
              </ContainerForm>
            </Form>
          );
        }}
      </Formik>
    </UserSection>
  );
};
