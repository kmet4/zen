import { FC } from 'react'
import styles from './Post.module.scss'

export const Post: FC = () => {
  return (
    <div className={styles.post}>
      <div className={styles.container}>
        <div>user_name</div>
        <div>@id</div>
      </div>
      <div>content</div>
      <div className={styles.postActions}>
        <div>like</div>
        <div>comment</div>
      </div>
    </div>
  )
}