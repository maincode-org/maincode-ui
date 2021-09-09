import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote } from '@ionic/react';
import { useLocation } from 'react-router-dom';
import './Menu.css';

import { components } from '../types/structure';

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId='main' type='overlay'>
      <IonContent>
        <IonList id='inbox-list'>
          <IonListHeader>Maincode UI Documentation</IonListHeader>
          <IonNote>
            By <a href='https://maincode.dk'>maincode.dk</a>
          </IonNote>

          {components.map((c, index) => makeMenuEntry(index, c.url, c.iosIcon, c.mdIcon, c.title, location.pathname))}
        </IonList>
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
