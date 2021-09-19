import { Route, useLocation } from 'react-router-dom';
import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import robot from 'assets/maincode-robot.png';
import './menu.css';

import { allComponentCategoryPages, allPages } from 'structure/assembly';
import { guidePages } from 'structure/guides';

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId='main' type='overlay'>
      <IonContent>
        <div className='menu-upper'>
          <IonList className='menu-list'>
            <IonListHeader className='select-none'>Maincode UI Documentation</IonListHeader>
            <IonNote className='pb-15 select-none'>
              By <a href='https://maincode.dk'>maincode.dk</a>
            </IonNote>
            {guidePages.map((c, index) => makeMenuEntry(index, c.url, c.title, location.pathname, c.iosIcon, c.mdIcon))}
          </IonList>

          {allComponentCategoryPages.map((p, index) => (
            <IonList key={index} className='menu-list'>
              <IonListHeader className='pb-15 select-none'>{p.title}</IonListHeader>

              {p.pages.map((c, index) => makeMenuEntry(index, c.url, c.title, location.pathname, chevronForwardOutline, chevronForwardOutline))}
            </IonList>
          ))}
        </div>
        <div className='menu-lower flex justify-center'>
          <img className='h-full select-none' src={robot} alt='Maincode Robot' />
        </div>
      </IonContent>
    </IonMenu>
  );
};

const makeMenuEntry = (key: string | number, url: string, title: string, locationPath: string, iosIcon?: string, mdIcon?: string): JSX.Element => (
  <IonMenuToggle key={key} autoHide={false}>
    <IonItem className={locationPath === `/maincode-ui${url}` ? 'selected' : ''} routerLink={`/maincode-ui${url}`} routerDirection='none' lines='none' detail={false}>
      {(iosIcon || mdIcon) && <IonIcon slot='start' ios={iosIcon} md={mdIcon} />}
      <IonLabel>{title}</IonLabel>
    </IonItem>
  </IonMenuToggle>
);

export default Menu;

export const menuRoutes: JSX.Element = (
  <>
    {allPages.map((c, i) => (
      <Route key={i} path={`/maincode-ui/${c.url}`} />
    ))}
  </>
);
