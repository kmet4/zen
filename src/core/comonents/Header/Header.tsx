import { FC, ReactNode } from 'react'
import styles from './Header.module.scss'

interface IHeaderProps {
  title?: string
  children?: ReactNode
}

export const Header: FC<IHeaderProps> = ({ title, children}) => {
  return (
    <header className={styles.header}>
      {children}
      <div>{title}</div>
    </header>
  )
}