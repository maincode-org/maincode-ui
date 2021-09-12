import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useLocation } from 'react-router-dom';
import { DocumentationSection, ExampleComponent } from 'maincode-ui';
import { useContext } from 'react';
import { EThemeModes, ThemeContext } from '../contexts/theme';
import { logoGithub, moonOutline, moonSharp, sunnyOutline, sunnySharp } from 'ionicons/icons';
import './Page.css';
import qs from 'qs';
import { componentsMap } from '../helpers/structure';

const Page: React.FC = ({ children }) => {
  const theme = useContext(ThemeContext);
  const isDarkMode = theme?.themeName === EThemeModes.dark;
  const location = useLocation();
  const page = qs.parse(location.search, { ignoreQueryPrefix: true }).p;
  console.log(page);
  const details = componentsMap.get(`?p=${page}`);
  console.log(details);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar className='flex flex-col'>
            <IonButtons slot='start'>
              <IonMenuButton />
            </IonButtons>
            <IonTitle className='flex flex-col p-1'>
              {details?.title}
              <div className='ion-float-end mr-1'>
                <IonIcon className='mr-1 pointer' onClick={theme?.toggleTheme} ios={isDarkMode ? moonOutline : sunnyOutline} md={isDarkMode ? moonSharp : sunnySharp} />
                <a href='https://github.com/maincode-org/maincode-ui' className='color-fg'>
                  <IonIcon className='pointer' ios={logoGithub} md={logoGithub} />
                </a>
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <DocumentationSection>
          <ExampleComponent text={details?.title ?? ''} />
        </DocumentationSection>
      </IonContent>
    </IonPage>
  );
};

export default Page;
