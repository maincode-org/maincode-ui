import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote } from '@ionic/react';
import { Route, useLocation } from 'react-router-dom';
import './menu.css';

import robot from '../../assets/maincode-robot.png';
import { documentationPages } from '../../helpers/structure';

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId='main' type='overlay'>
      <IonContent>
        <div className='menu-upper'>
          <IonList className='menu-list'>
            <IonListHeader>Maincode UI Documentation</IonListHeader>
            <IonNote className='pb-15'>
              By <a href='https://maincode.dk'>maincode.dk</a>
            </IonNote>
            {documentationPages.map((c, index) => makeMenuEntry(index, c.url, c.iosIcon, c.mdIcon, c.title, location.pathname))}
          </IonList>

          <IonList className='menu-list'>
            <IonListHeader className='pb-15'>Components</IonListHeader>
            {documentationPages.map((c, index) => makeMenuEntry(index, c.url, c.iosIcon, c.mdIcon, c.title, location.pathname))}
            {documentationPages.map((c, index) => makeMenuEntry(index, c.url, c.iosIcon, c.mdIcon, c.title, location.pathname))}
          </IonList>
        </div>
        <div className='menu-lower flex justify-center'>
          <img className='h-full' src={robot} alt='Maincode Robot' />
        </div>
      </IonContent>
    </IonMenu>
  );
};

const makeMenuEntry = (key: string | number, url: string, iosIcon: string, mdIcon: string, title: string, locationPath: string): JSX.Element => (
  <IonMenuToggle key={key} autoHide={false}>
    <IonItem className={locationPath === `/maincode-ui${url}` ? 'selected' : ''} routerLink={`/maincode-ui${url}`} routerDirection='none' lines='none' detail={false}>
      <IonIcon slot='start' ios={iosIcon} md={mdIcon} />
      <IonLabel>{title}</IonLabel>
    </IonItem>
  </IonMenuToggle>
);

export default Menu;

export const menuRoutes: JSX.Element = (
  <>
    {documentationPages.map((c, i) => (
      <Route key={i} path={`/maincode-ui/${c.url}`} />
    ))}
  </>
);
