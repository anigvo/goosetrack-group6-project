import { Field, Form, Formik } from 'formik';
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
  ValidInputIcon,
  ValidationIcon,
  BoxAllInputs,
  ContainerInputs,
  BoxInput,
  ContainerForm,
} from './UserForm.styled';
import { useState } from 'react';
import { SaveChangesBtn } from '../../buttons/SaveChangesBtn/SaveChangesBtn';
import { CustomFormInput } from '../../utils/constans/CustomFormInput';
import '../../utils/datePickerUser.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAvatar, selectUser } from '../../redux/selectors';
import { editUser } from '../../redux/auth/operations';
import { Notify } from 'notiflix';
import { Avatar } from 'components/Avatar/Avatar';
import { DateInput } from 'utils/constans/DateInput';
import { validateDate } from 'utils/constans/validateDate';
import { nanoid } from '@reduxjs/toolkit';

export const UserForm = () => {
  const userInfo = useSelector(selectUser);
  const [isFormChanged, setIsFormChanged] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const photo = useSelector(selectAvatar);

  const initialValues = {
    name: userInfo.name || '',
    birthday: userInfo.birthday ? 
    new Date(userInfo.birthday).toISOString().split('T')[0].replaceAll('-', '.') 
    : '',
    phone: userInfo.phone || '',
    skype: userInfo.skype || '',
    email: userInfo.email || '',
    avatarURL: userInfo.avatarURL || '',
  };
  

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const maxSizeInBytes = 600 * 1024;
      if (file.size > maxSizeInBytes) {
        Notify.failure(
          'The uploaded file is too large. The maximum size is 600 KB.'
        );
        e.target.value = null;
        return false;
      }
    }
    let reader = new FileReader();
    reader.onloadend = function (e) {
      setSelectedFile(reader.result)
    }
    reader.readAsDataURL(file)
    return true;
  }

  const cleanPhone = (phone) => {
    const erase = phone.replaceAll("-", " ").replace("+", "");
    if (erase.includes('_')) return true;
    return false;
  }

  const validateForm = (values) => {
    const errors = {};
    const { name, email, birthday, skype, phone } = values;
    if (name !== userInfo.name) {
      if (!name) {
        errors.name = 'Name can`t be epmty.';
      } else if (name.length > 16 || name.length < 3) {
        errors.name = 'Name must contain from 3 and up to 16 characters.';
      }
    }
    if (email !== userInfo.email) {
      if (!email) {
        errors.email = 'Email can`t be empty.';
      } else if (!email.match(/^([a-z0-9_.-]+)@([a-z09_.-]+).([a-z]{2,6})$/)) {
        errors.email = 'Email is invalid.'
      } else if (typeof email !== 'string') {
        errors.email = 'Invalid type of email';
      }
    }
    if (birthday !== new Date(userInfo.birthday).toISOString().split('T')[0].replaceAll('-', '.')) {
      if (!birthday.includes('-')) {
      const errorDate = validateDate(birthday);
      if (errorDate) errors.birthday = errorDate;
      }
    }
    if (skype !== userInfo.skype) {
      if (skype.length > 16) {
        errors.skype = 'Skype is too long';
      }
    }
    if (phone !== userInfo.phone) {
      if (!cleanPhone(phone) && !phone.match(/^\+?38\s\(\d{3}\)\s\d{3}[-\s]\d{2}[-\s]\d{2}/)) {
        errors.phone = 'Phone must be format 38 (000) 000-00-00'
      } else if (phone.length > 19) {
        errors.phone = 'Mobile phone is too long';
      }
    }
    return errors;
  }

  const handleSubmit = (values, {setValues}) => {
    const { name, email, birthday, skype, avatarURL, phone } = values;
    const formData = new FormData();
    if (name && name !== userInfo.name) {
      formData.append("name", name);
    }
    if (email && email !== userInfo.email) {
      formData.append("email", email);
    }
    if (!birthday.includes('-') && birthday !== new Date(userInfo.birthday).toISOString().split('T')[0].replaceAll('-', '.')) {
      formData.append("birthday", birthday.replaceAll('.', '-'));
    }
    if (skype && skype !== userInfo.skype) {
      formData.append("skype", skype);
    }
    if (!cleanPhone(phone) && phone && phone !== userInfo.phone) {
      const newPhone = phone.replaceAll("-", " ").replace("+", "");
      formData.append("phone", newPhone);
    }
    if (avatarURL && selectedFile && avatarURL !== selectedFile) {
      formData.delete("avatarURL");
      formData.append("image", avatarURL);
    }
    if (formData.entries().next().value) {
      dispatch(editUser(formData))
    }
    setIsFormChanged(false);
    setSelectedFile(null);
    setValues({
      ...initialValues
    })
  };

  const nameId = nanoid();
  const birthdayId = nanoid();
  const emailId = nanoid();
  const phoneId = nanoid();
  const skypeId = nanoid();

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
        enableReinitialize={true}
      >
        {({ setFieldValue, errors, touched, dirty, setTouched }) => {
          return (
            <Form autoComplete="off">
              <ContainerForm>
                <AvatarContainer>
                  <UserAvatar>
                    <Avatar photo={selectedFile ? selectedFile : photo} />
                    <AvatarUploadContainer>
                      <Field
                        id="avatarUrl"
                        name="avatarUrl"
                        type="file"
                        accept="image/*,.jpeg,.jpg,.png"
                        onChange={e => {
                          const isFile = handleFileChange(e);
                          isFile && setFieldValue("avatarURL", e.target.files[0])
                        }
                        }
                        style={{ display: 'none' }}
                      />

                      <AvatarUploadBtn htmlFor="avatarUrl">
                        <UpdateIcon />
                      </AvatarUploadBtn>
                    </AvatarUploadContainer>
                  </UserAvatar>

                  <UserName>{userInfo.name || 'User Name'}</UserName>
                  <UserRole>User</UserRole>
                </AvatarContainer>

                <UserFormWrap>
                  <BoxAllInputs>
                    <ContainerInputs>
                      <BoxInput>
                        <Label htmlFor={nameId}>
                          <LabelText
                            status={
                              errors.name
                                ? 'error'
                                  : 'default'
                            }
                          >
                            User Name
                          </LabelText>
                          <FormInput
                            id={nameId}
                            type="text"
                            name="name"
                            placeholder="User name"
                            autoComplete="off"
                            status={
                              errors.name
                                ? 'error'
                                  : 'default'
                            }
                          />
                          {touched.name && (
                            <ValidationIcon>
                              {errors.name ? (
                                <InvalidInputIcon />
                              ) : (
                                <ValidInputIcon />
                              )}
                            </ValidationIcon>
                          )}
                          <Feedback>
                            {errors.name && (
                              <InvalidFeedback name="name" component="div" />
                            )}
                          </Feedback>
                        </Label>
                      </BoxInput>
                      <BoxInput>
                        <Label htmlFor={birthdayId}>
                          <LabelText
                            status={
                              errors.birthday
                                ? 'error'
                                : 'default'
                            }
                          >
                            Birthday
                          </LabelText>
                          <FormInput
                            id={birthdayId}
                            type="text"
                            name="birthday"
                            status={
                              errors.birthday
                                ? 'error'
                                : 'default'
                            }
                            component={DateInput}
                          />
                          {touched.birthday && (
                            <ValidationIcon> 
                              {errors.birthday ? (
                                <InvalidInputIcon />
                              ) : (
                                <ValidInputIcon />
                              )}
                            </ValidationIcon>)}
                          <Feedback>
                            {errors.birthday && (
                              <InvalidFeedback name="birthday" component="div" />
                            )}
                          </Feedback>
                        </Label>
                      </BoxInput>
                      <BoxInput>
                        <Label htmlFor={emailId}>
                          <LabelText
                            status={
                              errors.email
                                ? 'error'
                                  : 'default'
                            }
                          >
                            Email
                          </LabelText>
                          <FormInput
                            id={emailId}
                            type="email"
                            name="email"
                            autoComplete="off"
                            placeholder="Enter your email"
                            status={
                              errors.email
                                ? 'error'
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
                            {errors.email && (
                              <InvalidFeedback name="email" component="div" />
                            )}
                          </Feedback>
                        </Label>
                      </BoxInput>
                    </ContainerInputs>
                    <ContainerInputs>
                      {' '}
                      <BoxInput>
                        <Label htmlFor={phoneId}>
                          <LabelText
                            status={
                              errors.phone
                                ? 'error'
                                  : 'default'
                            }
                          >
                            Phone
                          </LabelText>
                          <FormInput
                            id={phoneId}
                            type="tel"
                            name="phone"
                            placeholder="Enter your phone"
                            autoComplete="off"
                            component={CustomFormInput}
                            status={
                              errors.phone
                                ? 'error'
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
                            {errors.phone && (
                              <InvalidFeedback name="phone" component="div" />
                            )}
                          </Feedback>
                        </Label>
                      </BoxInput>
                      <BoxInput>
                        <Label htmlFor={skypeId}>
                          <LabelText
                            status={
                              errors.skype && touched.skype
                                ? 'error'
                                  : 'default'
                            }
                          >
                            Skype
                          </LabelText>
                          <FormInput
                            id={skypeId}
                            type="text"
                            name="skype"
                            placeholder="Add a skype number"
                            status={
                              errors.skype && touched.skype
                                ? 'error'

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
                            {errors.skype && (
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
    </>
  );
};
