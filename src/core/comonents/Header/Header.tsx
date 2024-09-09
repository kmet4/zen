import { FC } from 'react'
import styles from './Header.module.scss'

interface IHeaderProps {
  title?: string
}

export const Header: FC<IHeaderProps> = ({ title }) => {
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>{title}</h3>
    </header>
  )
}
