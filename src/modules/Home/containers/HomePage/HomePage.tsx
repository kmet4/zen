import { FC, useEffect } from 'react'
import { Header } from '@/core/comonents/Header'
import { AddPostMenu } from '@/modules/Home/containers/AddPostMenu'
import { PostList } from '@/modules/Home/containers/PostList'
import { RightSideBar } from '@/modules/Home/containers/RightSideBar'
import styles from './HomePage.module.scss'
import { getNews, getPosts } from '@/modules/Home/service'
import { useAppDispatch } from '@/core/hooks/useAppDispatch.ts'
import { useAppSelector } from '@/core/hooks/useAppSelector.ts'

export const HomePage: FC = () => {
  const dispatch = useAppDispatch()
  const news = useAppSelector((state) => state.home.news.apiData!)
  const posts = useAppSelector(state => state.home.posts.apiData!)

  useEffect(() => {
    dispatch(getNews())
    dispatch(getPosts())
  }, [dispatch])
  return (
    <>
      <div className={styles.container}>
        <Header title='Home' />
        <AddPostMenu />
        <PostList posts={posts}/>
      </div>
      <RightSideBar news={news}/>
    </>
  )
}
