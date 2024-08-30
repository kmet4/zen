import { FC } from 'react'
import { Input } from '@/shared/Input'
import { Button } from '@/shared/Button'
import styles from './AddPostMenu.module.scss'

export const AddPostMenu: FC = () => {
  return (
    <div className={styles.addPostMenu}>
      <Input placeholder="What`s happening?" />
      <Button />
    </div>
  )
}