import { FC } from 'react';

import { IPost } from '@/modules/Home/models';

import styles from './Post.module.scss';
import { LikeButton } from '@/shared/LikeButton';

interface IPostProps {
  post: IPost;
}

export const Post: FC<IPostProps> = ({ post }) => {
  const likes = 10;
  const isPostLiked = true;

  return (
    <div className={styles.post}>
      <div className={styles.container}>
        <img className={styles.avatar} src={post.userAvatar} alt='userAvatar' />
        <p className={styles.userName}>{post.userName}</p>
        <p className={styles.userId}>@{post.userId}</p>
      </div>
      <p className={styles.title}>{post.title}</p>
      <img className={styles.image} src={post.image} alt='image' />
      <div>
        <LikeButton likes={likes} liked={isPostLiked}/>

      </div>
    </div>
  );
};
