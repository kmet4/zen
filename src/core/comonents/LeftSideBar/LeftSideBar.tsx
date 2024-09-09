import { FC } from 'react'
import { RouteLinks } from '@/core/comonents/RouteLinks'
import styles from './LeftSideBar.module.scss'
import XIcon from '@mui/icons-material/X';

export const LeftSideBar: FC = () => {
  return (
    <div className={styles.leftSideBar}>
      <div className={styles.container}>
        <XIcon sx={{ fontSize: 30 }}/>
        <h3 className={styles.title}>NeTwitter</h3>
      </div>
      <RouteLinks/>
    </div>
  )
}