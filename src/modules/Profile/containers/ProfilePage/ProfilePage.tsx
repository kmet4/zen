import { FC } from 'react';

import { Header } from '@/core/comonents/Header';

import styles from './ProfilePage.module.scss';

export const ProfilePage: FC = () => {
  return (
    <div className={styles.profilePage}>
      <Header title='Профиль' />
      <div>содержиимое профиля</div>
    </div>
  );
};
