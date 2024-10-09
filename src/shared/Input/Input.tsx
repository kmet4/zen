import { CSSProperties, FC } from 'react';
import { Input as AntdInput } from 'antd';
import styles from './Input.module.scss';

interface IInputProps {
  type?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  helperText?: string | null | undefined;
  status?: '' | 'warning' | 'error' | undefined;
  style?: CSSProperties;
}

export const Input: FC<IInputProps> = ({helperText, ...rest}) => {
  return (
    <div className={styles.inputContainer}>
      <AntdInput {...rest} />
      {!!helperText && <div className={styles.helperText}>{helperText}</div>}
    </div>
  );
};
