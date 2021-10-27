import React from 'react';
import styles from './pretty-ul.module.css';
import { IonIcon } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';

type IProps = {
  items: (React.ReactNode | string)[];
  className?: string;
};

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
export default PrettyUL;
