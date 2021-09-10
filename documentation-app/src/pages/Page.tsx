import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useContext } from 'react';
import { EThemeModes, ThemeContext } from '../contexts/theme';
import { logoGithub, moonOutline, moonSharp, sunnyOutline, sunnySharp } from 'ionicons/icons';

import { useParams } from 'react-router';

import { componentsMap } from '../types/structure';
import { ExampleComponent } from 'maincode-ui';
import './Page.css';

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const theme = useContext(ThemeContext);
  const isDarkMode = theme?.themeName === EThemeModes.dark;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='flex flex-col'>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle className='flex flex-col p-1'>
            {componentsMap.get(`/${name}`)?.title}
            <div className='ion-float-end mr-1'>
              <IonIcon className='mr-1 pointer' onClick={theme?.toggleTheme} ios={isDarkMode ? moonOutline : sunnyOutline} md={isDarkMode ? moonSharp : sunnySharp} />
              <a href='https://github.com/maincode-org/maincode-ui' className='color-fg'>
                <IonIcon className='pointer' ios={logoGithub} md={logoGithub} />
              </a>
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <section className='px-1'>
          <h3>Lets put the intro description here</h3>
          <h2>Lets put the usage / demo's here</h2>
          <ExampleComponent text='Component!' />
          <h2>Lets put the children of this page here</h2>
          <h2>Lets put the prop descriptions here</h2>
          <h2>Lets put the style descriptions here</h2>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Page;
