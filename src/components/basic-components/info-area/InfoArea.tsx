import React from 'react';
import styles from './info-area.module.css';

type IProps = {
  className?: string;
};

const InfoArea: React.FC<IProps> = ({ className = '', children }) => {
  return <div className={`${className} ${styles.container} rounded-md p-1`}>{children}</div>;
};
export default InfoArea;
