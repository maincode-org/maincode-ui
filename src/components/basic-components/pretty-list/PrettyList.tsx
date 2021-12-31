import React from 'react';
import styles from './pretty-list.module.css';
import { IonIcon } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';

type IProps = {
  items: (React.ReactNode | string)[];
  ordering?: 'none' | 'numerical' | 'alphabetical';
  className?: string;
};

const PrettyList: React.FC<IProps> = ({ items, ordering = 'none', className = '' }) => {
  return ordering === 'none' ? (
    <PrettyUL items={items} className={`${className} ${styles.container}`} />
  ) : (
    <PrettyOL items={items} ordering={ordering} className={`${className} ${styles.container}`} />
  );
};
export default PrettyList;

const PrettyUL: React.FC<IProps> = ({ items, className = '' }) => {
  return (
    <ul className={`${className} ${styles.ULWrapper} p-0`}>
      {items.map((item, i) => (
        <li className='flex flex-row m-4' key={i}>
          <IonIcon className={styles.ULIcon} ios={chevronForwardOutline} md={chevronForwardOutline} />
          <p className='p-0 m-0 ml-4'>{item}</p>
        </li>
      ))}
    </ul>
  );
};

const PrettyOL: React.FC<IProps> = ({ items, ordering, className = '' }) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const listItem = (index: number, item: React.ReactNode | string) => (
    <li className='flex flex-row m-2' key={index}>
      <p className={`${styles.OLNumberLabel} flex justify-center items-center`}>{ordering === 'numerical' ? index + 1 : alphabet[index]}</p>
      <p className='ml-4'>{item}</p>
    </li>
  );

  return <ol className={`${className} ${styles.OLWrapper} p-0`}>{items.map((item, i) => listItem(i, item))}</ol>;
};
