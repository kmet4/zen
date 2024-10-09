import * as yup from 'yup';

const passwordRegEx = /^(?=.*[A-Z])(?=.*\d)(?=.{8,})/;

export const loginInitialValues = {
  email: '',
  password: '',
};

export const registrationInitialValues = {
  nickName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const validationLoginSchema = yup.object().shape({
  email: yup.string().required('Required').email('Incorrect email'),

  password: yup
    .string()
    .required('Required')
    .matches(passwordRegEx, 'Incorrect password'),
});

export const validationRegistrationSchema = yup.object().shape({
  nickName: yup
    .string()
    .required('Required')
    .min(4, 'Too few characters')
    .max(20, 'Too many characters'),

  email: yup.string().required('Required').email('Incorrect email'),

  password: yup
    .string()
    .required('Required')
    .matches(passwordRegEx, 'Incorrect password'),

  confirmPassword: yup
    .string()
    .required('Required')
    .oneOf([yup.ref('password')], 'Passwords don\'t match'),
});
