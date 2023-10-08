import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Field, Form, Formik } from 'formik';
import {
  UserSection,
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
import { userFormValidation } from '../../utils/constans/userFormValidation';
import { useState } from 'react';
import { SaveChangesBtn } from '../../buttons/SaveChangesBtn/SaveChangesBtn';
import { CustomFormInput } from '../../utils/constans/CustomFormInput';
import '../../utils/datePickerUser.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectAvatar, selectUser } from '../../redux/selectors';
import { editUser } from '../../redux/auth/operations';
import { Notify } from 'notiflix';
import { Avatar } from 'components/Avatar/Avatar';

export const UserForm = () => {
  const userInfo = useSelector(selectUser);
  const [isFormChanged, setIsFormChanged] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const photo = useSelector(selectAvatar);

  const initialValues = {
    name: userInfo.name || '',
    birthday: userInfo.birthday ? new Date(userInfo.birthday) : new Date(),
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


  const handleSubmit = (values, {resetForm}) => {
    const formData = new FormData();
    if (values.name) {
      formData.append("name", values.name);
    }
    if (values.email) {
      formData.append("email", values.email);
    }
    if (values.birthday) {
      formData.append("birthday", values.birthday.toISOString().split('T')[0]);
    }
    if (values.skype) {
      formData.append("skype", values.skype);
    }
    if (values.phone) {
      formData.append("phone", values.phone);
    }
    if (values.avatarURL && selectedFile) {
      formData.delete("avatarURL");
      formData.append("image", values.avatarURL);
    }
    dispatch(editUser(formData))
    setIsFormChanged(false);
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
                    <Avatar photo={selectedFile ? selectedFile : photo} />
                    <AvatarUploadContainer>
                      <Field
                        id="avatarUrl"
                        name="avatarUrl"
                        type="file"
                        accept="image/*,.jpeg,.jpg,.png"
                        onChange={(e) => {
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
                        <Label htmlFor="name">
                          <LabelText
                            status={
                              errors.name && touched.name
                                ? 'error'
                                : touched.name
                                  ? 'valid'
                                  : 'default'
                            }
                          >
                            User Name
                          </LabelText>
                          <FormInput
                            id="name"
                            type="text"
                            name="name"
                            placeholder="User name"
                            status={
                              errors.name && touched.name
                                ? 'error'
                                : touched.name
                                  ? 'valid'
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
                            {touched.name && !errors.name ? (
                              <ValidFeedback>
                                User name is correct
                              </ValidFeedback>
                            ) : (
                              <InvalidFeedback name="name" component="div" />
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
                                <DatePicker
                                  calendarStartDay={1}
                                  dropdownMode="select"
                                  yearDropdownItemNumber={100}
                                  scrollableYearDropdown
                                  selected={new Date(values.birthday)}
                                  dateFormat="yyyy-MM-dd"
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
