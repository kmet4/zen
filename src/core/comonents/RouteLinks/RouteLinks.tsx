import { FC } from 'react'
import { NavLink } from 'react-router-dom'

export const RouteLinks: FC = () => {

  const routes = [
    {
      img: 'Home',
      title: 'Home',
      path: 'Home'
    },
    {
      img: 'Profile',
      title: 'Profile',
      path: 'Profile'
    }
  ]

  return (
    <nav>
      {routes.map(({img, title, path}) => (
        <NavLink to={path} key={path}>
          <div>{img}</div>
          <div>{title}</div>
        </NavLink>
      ))}
    </nav>
  )
}