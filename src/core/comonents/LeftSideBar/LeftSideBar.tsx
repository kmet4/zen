import { FC } from 'react'
import { Header } from '@/core/comonents/Header'
import { RouteLinks } from '@/core/comonents/RouteLinks'
import styles from './LeftSideBar.module.scss'

export const LeftSideBar: FC = () => {
  return (
    <div className={styles.leftSideBar}>
      <Header>Zen</Header>
      <RouteLinks/>
    </div>
  )
}