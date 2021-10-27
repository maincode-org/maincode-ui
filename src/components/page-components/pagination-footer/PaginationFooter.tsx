import React from 'react';
import { Link } from 'react-router-dom';
import styles from './pagination-footer.module.css';

export type IFooterNav = {
  title: string;
  URL: string;
};

type IProps = {
  prev?: IFooterNav;
  next?: IFooterNav;
  className?: string;
};

const PaginationFooter: React.FC<IProps> = ({ prev, next, className = '' }) => {
  return (
    <div className={`${className} ${styles.container} flex justify-between mt-1`}>
      {prev && prev.title ? (
        <Link className={styles.anchor} to={prev.URL}>
          <div className='flex flex-col'>
            <p className={styles.label}>{'<'} Previous</p>
            <p className={styles.title}>{prev.title}</p>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next && next.title ? (
        <Link className={styles.anchor} to={next.URL}>
          <div className='flex flex-col'>
            <p className={`${styles.label} text-right`}>Next {'>'}</p>
            <p className={styles.title}>{next.title}</p>
          </div>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};
export default PaginationFooter;
