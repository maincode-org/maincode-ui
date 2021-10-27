import React from 'react';
import { IonIcon, IonItem, IonLabel, IonMenuToggle } from '@ionic/react';
import styles from './menu.module.css';

export const makeMenuEntry = (key: string | number, url: string, title: string, locationPath: string, icon?: string): JSX.Element => {
  return (
    <IonMenuToggle key={key} autoHide={false}>
      <IonItem className={locationPath === url ? `${styles.selected}` : ''} routerLink={url} routerDirection='none' lines='none' detail={false}>
        {icon && <IonIcon slot='start' ios={icon} md={icon} />}
        <IonLabel>{title}</IonLabel>
      </IonItem>
    </IonMenuToggle>
  );
};
