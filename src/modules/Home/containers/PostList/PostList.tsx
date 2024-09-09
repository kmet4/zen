import { FC } from 'react'
import { Post } from '@/modules/Home/containers/Post'
import styles from './PostList.module.scss'
import { IPost } from '@/modules/Home/models'

interface IPostListProps {
  posts: IPost[]
}

export const PostList: FC<IPostListProps> = ({posts}) => {

  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <Post key={post.id} post={post}/>
      ))}
    </div>
  )
}