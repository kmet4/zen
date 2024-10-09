import { FC, ReactNode } from 'react';

import styles from './Layout.module.scss';
import { LeftSideBar } from '@/core/comonents/LeftSideBar/LeftSideBar.tsx';
import { useLocation } from 'react-router-dom';
import { Routes } from '@/core/enum';

interface ILayoutProps {
  children?: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  const isPublicPage = pathname === Routes.LOGIN || pathname === Routes.REGISTRATION;

  return (
    <div className={styles.layout}>
      {!isPublicPage&&<LeftSideBar />}
      {children}
    </div>
  );
};
