import { FC } from 'react';

import { INews } from '@/modules/Home/models';

import styles from './News.module.scss';

interface INewsProps {
  news: INews;
}

export const News: FC<INewsProps> = ({ news }) => {
  return (
    <div className={styles.news}>
      <p className={styles.title}>{news.title}</p>
      <img src={news.urlToImage} alt='newsImage' />
    </div>
  );
};
