import { FC, ReactNode } from 'react'
import { LeftSideBar } from '@/core/comonents/LeftSideBar/LeftSideBar.tsx'
import styles from './Layout.module.scss'

interface ILayoutProps {
  children?: ReactNode
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <LeftSideBar/>
      <>
        {children}
      </>
    </div>
  )
}
