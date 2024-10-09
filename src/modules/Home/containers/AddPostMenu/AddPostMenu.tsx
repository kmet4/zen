import React, { FC, useState } from 'react';

import { createPost } from '@/modules/Home/service';
import { useAppDispatch } from '@/core/hooks/useAppDispatch.ts';

import styles from './AddPostMenu.module.scss';

import { Input } from 'antd';
import { Button } from 'antd';

export const AddPostMenu: FC = () => {
  const [postText, setPostText] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleChangePostText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostText(e.target.value);
  };

  const handleCreatePost = () => {
    const newPost = {
      userName: 'Anton',
      userId: '12345',
      title: postText,
    };
    dispatch(createPost({ post: newPost }));
    setPostText('');
  };

  return (
    <div className={styles.addPostMenu}>
      <Input
        placeholder='What`s happening?'
        value={postText}
        onChange={handleChangePostText}
      />
      <Button type='primary' disabled={!postText} onClick={handleCreatePost}>
        Post
      </Button>
    </div>
  );
};
