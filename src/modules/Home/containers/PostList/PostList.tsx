import { FC } from 'react';

import { Post } from '@/modules/Home/containers/Post';
import { useAppSelector } from '@/core/hooks/useAppSelector.ts';

import styles from './PostList.module.scss';

export const PostList: FC = () => {
  const posts = useAppSelector((state) => state.home.posts.apiData!);

  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
