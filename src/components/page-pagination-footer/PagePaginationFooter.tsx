import React from 'react';
import styles from './page-navigation-footer.module.css';

export type IFooterNav = {
  title: string;
  URL: string;
};

type IProps = {
  className?: string;
  prev?: IFooterNav;
  next?: IFooterNav;
};

const PagePaginationFooter: React.FC<IProps> = ({ className = '', prev, next }) => {
  return (
    <div className={`${className} ${styles.container} flex justify-between mt-1`}>
      <div className='flex flex-col'>
        {prev && prev.title && (
          <a className={styles.anchor} href={prev.URL}>
            <p className={styles.label}>{'<'} Previous</p>
            <p>{prev.title}</p>
          </a>
        )}
      </div>
      <div className='flex flex-col'>
        {next && next.title && (
          <a className={styles.anchor} href={next.URL}>
            <p className={`${styles.label} text-right`}>Next {'>'}</p>
            <p>{next.title}</p>
          </a>
        )}
      </div>
    </div>
  );
};
export default PagePaginationFooter;
