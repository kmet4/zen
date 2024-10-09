import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

import styles from './RouteLinks.module.scss';
import { Routes } from '@/core/enum';

export const RouteLinks: FC = () => {
  const routes = [
    {
      img: <HomeIcon />,
      title: 'Home',
      path: Routes.HOME,
    },
    {
      img: <PersonIcon />,
      title: 'Profile',
      path: Routes.PROFILE,
    },
  ];

  return (
    <nav className={styles.navList}>
      {routes.map(({ img, title, path }) => (
        <NavLink to={path} key={path}>
          <div className={styles.routeLink}>
            <div>{img}</div>
            <p>{title}</p>
          </div>
        </NavLink>
      ))}
    </nav>
  );
};
