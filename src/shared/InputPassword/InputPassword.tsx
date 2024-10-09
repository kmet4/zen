import React, { CSSProperties } from 'react';
import { Input as AntdInput } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import styles from './InputPassword.module.scss';

interface InputPasswordProps {
  type?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  helperText?: string | null | undefined;
  status?: '' | 'warning' | 'error' | undefined;
  style?: CSSProperties;
}

export const InputPassword: React.FC<InputPasswordProps> = ({ helperText, ...rest }) => (
  <div className={styles.inputContainer}>
    <AntdInput.Password
      {...rest}
      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
    {!!helperText && <div className={styles.helperText}>{helperText}</div>}
  </div>
);
