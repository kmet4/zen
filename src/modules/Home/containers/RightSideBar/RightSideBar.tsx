import { FC, useMemo, useState } from 'react';

import { News } from '@/modules/Home/containers/News';
import { useAppSelector } from '@/core/hooks/useAppSelector.ts';

import styles from './RightSideBar.module.scss';

import { Button } from 'antd';

export const RightSideBar: FC = () => {
  const news = useAppSelector((state) => state.home.news.apiData!);

  const [newsToShow, setNewsToShow] = useState(3);

  const showNewsList = useMemo(
    () => news.slice(0, newsToShow),
    [newsToShow, news],
  );

  const handleShowNews = () => {
    setNewsToShow((prev) => prev + 3);
  };

  return (
    <div className={styles.rightSideBar}>
      <h3 className={styles.title}>News</h3>
      <div className={styles.newsList}>
        {showNewsList.map((news) => (
          <News key={news.url} news={news} />
        ))}
        <Button type='primary' onClick={handleShowNews}>
          Показать больше
        </Button>
      </div>
    </div>
  );
};
