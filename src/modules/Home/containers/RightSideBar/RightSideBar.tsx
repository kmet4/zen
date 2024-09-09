import { FC } from 'react'
import { INews } from '@/modules/Home/models'
import styles from './RightSideBar.module.scss'
import { News } from '@/modules/Home/containers/News'

interface IRightSideBarProps {
  news: INews[]
}

export const RightSideBar: FC<IRightSideBarProps> = ({ news }) => {
  return (
    <div className={styles.rightSideBar}>
      <h3 className={styles.title}>News</h3>
      <div className={styles.newsList}>
        {news.map((news) => (
          <News key={news.url} news={news}/>
        ))}
      </div>
    </div>
  )
}
