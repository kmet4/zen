import { FC } from 'react';

import styles from './AccountMenu.module.scss';

export const AccountMenu: FC = () => {
  return (
    <div className={styles.accountMenu}>
      <div className={styles.accountInfo}>
        <div>Фото пользоваеля</div>
        <div className={styles.container}>
          <div>Имя пользователя</div>
          <div>id пользователя</div>
        </div>
      </div>
      <div>Настройки</div>
    </div>
  );
};
