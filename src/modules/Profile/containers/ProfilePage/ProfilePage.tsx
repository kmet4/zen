import { FC } from 'react'
import styles from './ProfilePage.module.scss'
import { Header } from '@/core/comonents/Header'

export const ProfilePage: FC = () => {
  return (
    <div className={styles.profilePage}>
        <Header title='Профиль'/>
    </div>
  )
}