import React, { FC, useEffect } from 'react';

import { Button } from 'antd';
import Cookies from 'js-cookie';
import styles from './AuthLogin.module.scss';
import { useAppSelector } from '@/core/hooks/useAppSelector.ts';
import { useFormik } from 'formik';
import { loginInitialValues, validationLoginSchema } from '@/modules/Auth/data';
import { getUsers } from '@/modules/Auth/service';
import { useAppDispatch } from '@/core/hooks/useAppDispatch.ts';
import { NavLink, useNavigate } from 'react-router-dom';
import { Routes } from '@/core/enum';
import { Input } from '@/shared/Input';
import { getHelperText } from '@/core/utils/getHelperText.ts';
import { getInputStatus } from '@/core/utils/getInputStatus.ts';
import { InputPassword } from '@/shared/InputPassword';

export const AuthLogin: FC = () => {
  const dispatch = useAppDispatch();

  const users = useAppSelector((state) => state.auth.users.apiData!);

  const navigate = useNavigate();

  const { touched, handleSubmit, errors, getFieldProps } = useFormik({
    initialValues: loginInitialValues,
    validationSchema: validationLoginSchema,
    onSubmit: ({ email, password }) => {
      const usersEmails = users.map((user) => user.email);
      const usersPasswords = users.map((user) => user.password);

      if (usersEmails.includes(email)) {
        const userIndex = usersEmails.indexOf(email);

        if (usersPasswords?.[userIndex] === password) {
          const userId = users?.[userIndex].id;

          Cookies.set('user', userId || '');
          navigate(Routes.HOME);
        }
      }
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
    <div className={styles.authLogin}>
      <h3>Login</h3>
      <Input
        type="email"
        placeholder='Enter your email'
        status={getInputStatus({ errors, touched, inputName: 'email' })}
        helperText={getHelperText({ errors, touched, inputName: 'email' })}
        {...getFieldProps('email')}
      />
      <InputPassword
        type="password"
        placeholder='Enter your password'
        status={getInputStatus({ errors, touched, inputName: 'password' })}
        helperText={getHelperText({ errors, touched, inputName: 'password' })}
        {...getFieldProps('password')}
      />
      <Button type='primary' onClick={handleSubmitForm}>
        Sign in
      </Button>
      <NavLink to={Routes.REGISTRATION} className={styles.signUp}>Sign up</NavLink>
    </div>
  );
};
