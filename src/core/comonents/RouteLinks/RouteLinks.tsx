import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './RouteLinks.module.scss'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'

export const RouteLinks: FC = () => {
  const routes = [
    {
      img: <HomeIcon />,
      title: 'Home',
      path: 'Home',
    },
    {
      img: <PersonIcon />,
      title: 'Profile',
      path: 'Profile',
    },
  ]

  return (
    <nav className={styles.navList}>
      {routes.map(({ img, title, path }) => (
        <NavLink to={path} key={path}>
          <div className={styles.routeLink}>
            <div>{img}</div>
            <div>{title}</div>
          </div>
        </NavLink>
      ))}
    </nav>
  )
}
