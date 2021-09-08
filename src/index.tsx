import React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

const unused

export const ExampleComponent: React.FC<Props> = ({ text }: Props) => {
  return (
    <div className={`${styles.test} glass-bg shadow-xl rounded`}>
      Example Component: {text}
    </div>
  )
}
