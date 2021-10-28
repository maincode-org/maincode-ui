import React from 'react';
import styles from './pretty-list.module.css';
import { IonIcon } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';

type IProps = {
  items: (React.ReactNode | string)[];
  ordering?: 'unordered' | 'numeric' | 'alphabetic';
  className?: string;
};

const PrettyList: React.FC<IProps> = ({ items, ordering = 'unordered', className = '' }) => {
  return ordering === 'unordered' ? <PrettyUL items={items} className={className} /> : <PrettyOL items={items} ordering={ordering} className={className} />;
};
export default PrettyList;

const PrettyUL: React.FC<IProps> = ({ items, className = '' }) => {
  return (
    <ul className={`${className} ${styles.ULWrapper} pl-1`}>
      {items.map((item, i) => (
        <li key={i}>
          <IonIcon className='pr-05' ios={chevronForwardOutline} md={chevronForwardOutline} />
          {item}
        </li>
      ))}
    </ul>
  );
};

const PrettyOL: React.FC<IProps> = ({ items, ordering, className = '' }) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const listItem = (index: number, item: React.ReactNode | string) => (
    <div className='flex flex-row m-05 items-center'>
      <p className={`${styles.OLNumberLabel} flex justify-center items-center`}>{ordering === 'numeric' ? index + 1 : alphabet[index]}</p>
      <p className='ml-1'>{item}</p>
    </div>
  );

  return <div className={`${className} ${styles.OLWrapper}`}>{items.map((item, i) => listItem(i, item))}</div>;
};
