import React from 'react';
import styles from './pagination-footer.module.css';
import { IonItem } from '@ionic/react';

export type IFooterNav = {
  title: string;
  URL: string;
};

type IProps = {
  className?: string;
  prev?: IFooterNav;
  next?: IFooterNav;
};

const PaginationFooter: React.FC<IProps> = ({ className = '', prev, next }) => {
  return (
    <div className={`${className} ${styles.container} flex justify-between mt-1`}>
      {prev && prev.title ? (
        <IonItem className={styles.anchor} routerLink={prev.URL}>
          <div className='flex flex-col'>
            <p className={styles.label}>{'<'} Previous</p>
            <p className={styles.title}>{prev.title}</p>
          </div>
        </IonItem>
      ) : (
        <div />
      )}
      {next && next.title ? (
        <IonItem className={styles.anchor} routerLink={next.URL}>
          <div className='flex flex-col'>
            <p className={`${styles.label} text-right`}>Next {'>'}</p>
            <p className={styles.title}>{next.title}</p>
          </div>
        </IonItem>
      ) : (
        <div />
      )}
    </div>
  );
};
export default PaginationFooter;
