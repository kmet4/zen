import React, { FC } from 'react'

/*interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}*/

export const Input: FC<React.InputHTMLAttributes<HTMLInputElement>> = ( inputProps ) => {
  return <input type="text" {...inputProps} />
}
