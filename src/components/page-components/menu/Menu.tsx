import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';
import { IonContent, IonList, IonListHeader, IonMenu, IonNote } from '@ionic/react';
import { chevronForwardSharp } from 'ionicons/icons';
import { IEntityCategory, IDocumentationPage } from '../../documentation-components/types';
import { EThemeModes, ThemeContext } from 'contexts/theme';
import styles from './menu.module.css';
import { makeMenuEntry } from './helpers';

type IProps = {
  guidePages: IDocumentationPage[];
  entityPages: IEntityCategory[];
  headerText: string;
  subHeader?: string;
  footerImage?: string;
  className?: string;
};

const Menu: React.FC<IProps> = ({ entityPages, guidePages, headerText, subHeader, footerImage, className = '' }) => {
  const location = useLocation();
  const theme = useContext(ThemeContext);
  const isDarkMode = theme?.themeName === EThemeModes.dark;

  return (
    <IonMenu className={`${className} ${styles.menu} ${isDarkMode ? styles.dark : styles.light}`} contentId='main' type='overlay'>
      <IonContent>
        <div className={styles.menuUpper}>
          <IonList className={`${styles.menuList} mb-4`}>
            <IonListHeader className='select-none'>{headerText}</IonListHeader>
            {subHeader && <IonNote className='pb-4 pt-3 select-none'>{parse(subHeader)}</IonNote>}
            {guidePages.map((c, index) => makeMenuEntry(index, c.url, c.title, location.pathname, c.icon))}
          </IonList>

          {entityPages.map((p, index) => (
            <IonList key={index} className={styles.menuList}>
              <IonListHeader className='pb-3 select-none'>{p.title}</IonListHeader>

              {p.pages.map((c, index) => makeMenuEntry(index, c.url, c.title, location.pathname, chevronForwardSharp))}
            </IonList>
          ))}
        </div>
        {footerImage && (
          <div className={`${styles.menuLower} flex flex justify-center`}>
            <img className='h-full select-none pt-6' src={footerImage} alt='Maincode Robot' />
          </div>
        )}
      </IonContent>
    </IonMenu>
  );
};
export default Menu;
