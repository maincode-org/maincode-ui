import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import { IComponentCategoryPages, IDocumentationPage } from '../../documentation-components/types';
import styles from './menu.module.css';

type IProps = {
  componentCategoryPages: IComponentCategoryPages[];
  guidePages: IDocumentationPage[];
  bottomImage?: string;
};

const Menu: React.FC<IProps> = ({ componentCategoryPages, guidePages, bottomImage }) => {
  const location = useLocation();

  return (
    <IonMenu className={styles.menu} contentId='main' type='overlay'>
      <IonContent>
        <div className={styles.menuUpper}>
          <IonList className={styles.menuList}>
            <IonListHeader className='select-none'>Maincode UI Documentation</IonListHeader>
            <IonNote className='pb-15 select-none'>
              By <a href='https://maincode.dk'>maincode.dk</a>
            </IonNote>
            {guidePages.map((c, index) => makeMenuEntry(index, c.url, c.title, location.pathname, c.iosIcon, c.mdIcon))}
          </IonList>

          {componentCategoryPages.map((p, index) => (
            <IonList key={index} className={styles.menuList}>
              <IonListHeader className='pb-15 select-none'>{p.title}</IonListHeader>

              {p.pages.map((c, index) => makeMenuEntry(index, c.url, c.title, location.pathname, chevronForwardOutline, chevronForwardOutline))}
            </IonList>
          ))}
        </div>
        {bottomImage && (
          <div className={`${styles.menuLower} flex flex justify-center`}>
            <img className='h-full select-none' src={bottomImage} alt='Maincode Robot' />
          </div>
        )}
      </IonContent>
    </IonMenu>
  );
};

const makeMenuEntry = (key: string | number, url: string, title: string, locationPath: string, iosIcon?: string, mdIcon?: string): JSX.Element => (
  <IonMenuToggle key={key} autoHide={false}>
    <IonItem className={locationPath === url ? `${styles.selected}` : ''} routerLink={url} routerDirection='none' lines='none' detail={false}>
      {(iosIcon || mdIcon) && <IonIcon slot='start' ios={iosIcon} md={mdIcon} />}
      <IonLabel>{title}</IonLabel>
    </IonItem>
  </IonMenuToggle>
);

export default Menu;

export const menuRoutes = (allPages: IDocumentationPage[]): JSX.Element[] => allPages.map((c, i) => <Route key={i} path={c.url} />);
