import React, { FC, useEffect } from 'react';
import { Button } from 'antd';
import styles from './AuthRegistration.module.scss';
import { useAppSelector } from '@/core/hooks/useAppSelector.ts';
import { useFormik } from 'formik';
import {
  registrationInitialValues,
  validationRegistrationSchema,
} from '@/modules/Auth/data';
/*import { getUsers, createUser } from '@/modules/Auth/service'; // Не забудь импортировать createUser*/
import { useAppDispatch } from '@/core/hooks/useAppDispatch.ts';
import { NavLink, useNavigate } from 'react-router-dom';
import { Routes } from '@/core/enum';
import { Input } from '@/shared/Input';
import { getHelperText } from '@/core/utils/getHelperText.ts';
import { getInputStatus } from '@/core/utils/getInputStatus.ts';
import { InputPassword } from '@/shared/InputPassword';

import Cookies from 'js-cookie';
import { createUser, getUsers } from '@/modules/Auth/service';

export const AuthRegistration: FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.auth.users.apiData!);
  const navigate = useNavigate();

  const { values, touched, handleSubmit, errors, getFieldProps } = useFormik({
    initialValues: registrationInitialValues,
    validationSchema: validationRegistrationSchema,
    onSubmit: ({ nickName, email, password }) => {
      const usersNickNames = users?.map((user) => user.nickName);
      const usersEmails = users.map((user) => user.email);

      const userData = {
        nickName,
        email,
        password,
      };

      if (usersNickNames?.includes(nickName)) {
        return;
      }

      if (usersEmails?.includes(email)) {
        return;
      }

      dispatch(createUser({ userData })).then(() => {
        Cookies.set('user', JSON.stringify({ email: values.email, password: values.password }));
        navigate(Routes.HOME);
      });
    },
  });

  const handleSubmitForm = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    handleSubmit();
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className={styles.authRegistration}>
      <h3>Registration</h3>
      <Input
        type='text'
        status={getInputStatus({ errors, touched, inputName: 'nickName' })}
        helperText={getHelperText({ errors, touched, inputName: 'nickName' })}
        placeholder='Enter nickname'
        {...getFieldProps('nickName')}
      />
      <Input
        type='email'
        placeholder='Enter your email'
        status={getInputStatus({ errors, touched, inputName: 'email' })}
        helperText={getHelperText({ errors, touched, inputName: 'email' })}
        {...getFieldProps('email')}
      />
      <InputPassword
        type='password'
        placeholder='Enter your password'
        status={getInputStatus({ errors, touched, inputName: 'password' })}
        helperText={getHelperText({ errors, touched, inputName: 'password' })}
        {...getFieldProps('password')}
      />
      <InputPassword
        type='password'
        placeholder='Confirm password'
        status={getInputStatus({
          errors,
          touched,
          inputName: 'confirmPassword',
        })}
        helperText={getHelperText({
          errors,
          touched,
          inputName: 'confirmPassword',
        })}
        {...getFieldProps('confirmPassword')}
      />
      <Button type='primary' onClick={handleSubmitForm}>
        Sign up
      </Button>
      <NavLink to={Routes.LOGIN} className={styles.signIn}>
        Sign in
      </NavLink>
    </div>
  );
};
