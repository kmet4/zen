import React, { FC } from 'react'

export const Button: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (buttonProps) => {
  return <button {...buttonProps}>Post</button>
}
