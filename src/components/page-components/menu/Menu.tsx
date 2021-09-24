import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';
import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import { IEntityCategory, IDocumentationPage } from '../../documentation-components/types';
import { EThemeModes, ThemeContext } from 'contexts/theme';
import styles from './menu.module.css';

type IProps = {
  guidePages: IDocumentationPage[];
  entityPages: IEntityCategory[];
  headerText: string;
  subHeader?: string;
  footerImage?: string;
};

const Menu: React.FC<IProps> = ({ entityPages, guidePages, headerText, subHeader, footerImage }) => {
  const location = useLocation();
  const theme = useContext(ThemeContext);
  const isDarkMode = theme?.themeName === EThemeModes.dark;

  return (
    <IonMenu className={`${styles.menu} ${isDarkMode ? styles.dark : styles.light}`} contentId='main' type='overlay'>
      <IonContent>
        <div className={styles.menuUpper}>
          <IonList className={`${styles.menuList} mb-1`}>
            <IonListHeader className='select-none'>{headerText}</IonListHeader>
            {subHeader && <IonNote className='pb-1 pt-05 select-none'>{parse(subHeader)}</IonNote>}
            {guidePages.map((c, index) => makeMenuEntry(index, c.url, c.title, location.pathname, c.iosIcon, c.mdIcon))}
          </IonList>

          {entityPages.map((p, index) => (
            <IonList key={index} className={styles.menuList}>
              <IonListHeader className='pb-05 select-none'>{p.title}</IonListHeader>

              {p.pages.map((c, index) => makeMenuEntry(index, c.url, c.title, location.pathname, chevronForwardOutline, chevronForwardOutline))}
            </IonList>
          ))}
        </div>
        {footerImage && (
          <div className={`${styles.menuLower} flex flex justify-center`}>
            <img className='h-full select-none' src={footerImage} alt='Maincode Robot' />
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
