import { FC } from 'react'
import { Post } from '@/modules/Main/containers/Post'
import styles from './PostList.module.scss'

export const PostList: FC = () => {
  return (
    <div className={styles.postList}>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}