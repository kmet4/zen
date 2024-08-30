import { FC } from 'react'
import { Header } from '@/core/comonents/Header'
import { AddPostMenu } from '@/modules/Main/containers/AddPostMenu'
import { PostList } from '@/modules/Main/containers/PostList'
import { RightSideBar } from '@/modules/Main/containers/RightSideBar'
import styles from './HomePage.module.scss'

export const HomePage: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <Header title="Home"/>
        <AddPostMenu/>
        <PostList/>
      </div>
      <RightSideBar/>
    </>
  )
}
