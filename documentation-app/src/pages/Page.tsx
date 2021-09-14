import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Route } from 'react-router-dom';
import { DocumentationSection, ExampleComponent } from 'maincode-ui';
import { useContext } from 'react';
import { EThemeModes, IThemeContext, ThemeContext } from '../contexts/theme';
import { logoGithub, moonOutline, moonSharp, sunnyOutline, sunnySharp } from 'ionicons/icons';
import './Page.css';
import { components, IComponentDocumentation } from '../helpers/structure';

const Page: React.FC = ({ children }) => {
  const theme = useContext(ThemeContext);

  return (
    <IonPage>
      <IonContent fullscreen>
        {components.map((c, i) => (
          <Route key={i} path={`/maincode-ui${c.url}`} render={() => makeContent(c, theme)} />
        ))}
      </IonContent>
    </IonPage>
  );
};

const makeContent = (c: IComponentDocumentation, theme: IThemeContext | null): React.ReactNode => (
  <>
    <IonHeader>
      <IonToolbar className='flex flex-col'>
        <IonButtons slot='start'>
          <IonMenuButton />
        </IonButtons>
        <IonTitle className='flex flex-col p-1'>
          {c?.title}
          <div className='ion-float-end mr-1'>
            <IonIcon
              className='mr-1 pointer'
              onClick={theme?.toggleTheme}
              ios={theme?.themeName === EThemeModes.dark ? moonOutline : sunnyOutline}
              md={theme?.themeName === EThemeModes.dark ? moonSharp : sunnySharp}
            />
            <a href='https://github.com/maincode-org/maincode-ui' className='color-fg'>
              <IonIcon className='pointer' ios={logoGithub} md={logoGithub} />
            </a>
          </div>
        </IonTitle>
      </IonToolbar>
    </IonHeader>

    <DocumentationSection>
      <ExampleComponent text={c?.title ?? ''} />
    </DocumentationSection>
  </>
);

export default Page;
