import React, { FC, useState } from 'react'
import { Input } from '@/shared/Input'
import { Button } from '@/shared/Button'
import styles from './AddPostMenu.module.scss'

export const AddPostMenu: FC = () => {
  const [postText, setPostText] = useState<string>('');

  const handleChangePostText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostText(e.target.value)
  }

  const handleCreatePost = () => {
    console.log(postText)
  }

  return (
    <div className={styles.addPostMenu}>
      <Input
        placeholder="What`s happening?"
        value={postText}
        onChange={handleChangePostText}
      />
      <Button disabled={!postText} onClick={handleCreatePost}/>
    </div>
  )
}