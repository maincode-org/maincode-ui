import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { DocumentationSection, ExampleComponent } from 'maincode-ui';
import { useContext, useEffect } from 'react';
import { EThemeModes, ThemeContext } from '../contexts/theme';
import { logoGithub, moonOutline, moonSharp, sunnyOutline, sunnySharp } from 'ionicons/icons';

import { useParams } from 'react-router';

import { componentsMap } from '../types/structure';
import './Page.css';

const Page: React.FC = ({ children }) => {
  const { name } = useParams<{ name: string }>();
  const theme = useContext(ThemeContext);
  const isDarkMode = theme?.themeName === EThemeModes.dark;

  useEffect(() => {
    // TODO The page seems to rerender twice when navigating - and this causes an ugly transition
    // when the page has been scrolled down. It flashes the content, scrollbar and doesnt scroll up (?)
    console.log('page component rerendered', name);
  });

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
        <DocumentationSection>
          <ExampleComponent text='Example' />
        </DocumentationSection>
      </IonContent>
    </IonPage>
  );
};

export default Page;
