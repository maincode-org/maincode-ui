import React from 'react';
import styles from './info-area.module.css';
import parse from 'html-react-parser';

type IProps = {
  className?: string;
  info: string;
};

const InfoArea: React.FC<IProps> = ({ className = '', info }) => {
  return (
    <div className={`${className} ${styles.container} rounded-md p-1`}>
      <p>{parse(info)}</p>
    </div>
  );
};
export default InfoArea;
