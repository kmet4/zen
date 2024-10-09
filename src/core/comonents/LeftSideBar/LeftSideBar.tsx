import { FC } from 'react';

import { RouteLinks } from '@/core/comonents/RouteLinks';

import styles from './LeftSideBar.module.scss';

export const LeftSideBar: FC = () => {
  return (
    <div className={styles.leftSideBar}>
      <h3 className={styles.title}>NeTwitter</h3>
      <RouteLinks />
    </div>
  );
};
