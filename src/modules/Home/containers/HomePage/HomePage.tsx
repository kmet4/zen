import { FC, useEffect } from 'react';

import { Header } from '@/core/comonents/Header';
import { AddPostMenu } from '@/modules/Home/containers/AddPostMenu';
import { PostList } from '@/modules/Home/containers/PostList';
import { RightSideBar } from '@/modules/Home/containers/RightSideBar';
import { getNews, getPosts } from '@/modules/Home/service';
import { useAppDispatch } from '@/core/hooks/useAppDispatch.ts';

import styles from './HomePage.module.scss';

export const HomePage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNews());
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      <div className={styles.container}>
        <Header title='Home' />
        <AddPostMenu />
        <PostList />
      </div>
      <RightSideBar />
    </>
  );
};
