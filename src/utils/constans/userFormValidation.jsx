import { object, string, date } from 'yup';

export const userFormValidation = object({
  userName: string().min(3, 'Too short!').max(16, 'Too long!'),
  birthday: date(),
  email: string()
    .matches(
      /^([a-z0-9_.-]+)@([a-z09_.-]+).([a-z]{2,6})$/,
      'Email is not valid.'
    )
    .required('Please enter your email.'),
  skype: string().max(16),
  phone: string()
    .nullable()
    .notRequired()
    .matches(
      /^\+\d{2} \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      'Phone must be in the format "+38 (000) 000-00-00"'
    ),
  // phone: string()
    // .notRequired()
    // .nullable() // Дозволити пусте поле
    // .test('is-phone-valid', 'Invalid phone format', value => {
    //   if (value && value !== null) {
    //     if (!/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(value)) {
    //       return false; // Невірний формат телефону
    //     }
    //   }
    //   return true; // Повернути true, якщо все валідно або поле пусте
    // })
    // .max(19, 'Phone must include 10 numbers'),
  avatarUrl: string(),
});
// import * as yup from 'yup';
// export const userFormValidation = yup.object().shape({
//   avatar: yup.mixed().test('fileType', 'Невірний тип файлу', value => {
//     return value && ['image/jpeg', 'image/png'].includes(value.type);
//   }),
//   username: yup
//     .string()
//     .max(16, 'Максимальна довжина 16 символів')
//     .required('Обовʼязкове поле'),
//   email: yup
//     .string()
//     .email('Невірний формат електронної пошти')
//     .required('Обовʼязкове поле'),
//   birthday: yup
//     .date()
//     .max(new Date(), 'Дата народження повинна бути меншою за поточну дату')
//     .required('Обовʼязкове поле'),
//   phone: yup
//     .string()
    
      
    
//     .notRequired(),
//   skype: yup.string().max(16, 'Максимальна довжина 16 символів'),
// });

// import * as yup from 'yup';

// export const userFormValidation = yup.object().shape({
//   avatar: yup.mixed().test('fileType', 'Invalid file type', value => {
//     return value && ['image/jpeg', 'image/png'].includes(value.type);
//   }),
//   username: yup
//     .string()
//     .max(16, 'Maximum length is 16 characters')
//     .required('This field is required')
//     .matches(/^[a-zA-Z]+$/, 'Username should only contain Latin letters'),
//   email: yup
//     .string()
//     .email('Invalid email format')
//     .required('This field is required'),
//   birthday: yup
//     .date()
//     .max(new Date(), 'Date of birth should be before the current date')
//     .required('This field is required'),
//   phone: yup.string().notRequired().matches(
//       /^\+\d{2} \(\d{3}\) \d{3}-\d{2}-\d{2}$/,'Phone must be in the format "+38 (000) 000-00-00"'),
//   skype: yup.string().max(16, 'Maximum length is 16 characters'),
// });

