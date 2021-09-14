import { IonContent, IonPage } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { DocumentationSection, ExampleComponent } from 'maincode-ui';
import { useState } from 'react';
import styles from './page.module.css';
import { documentationPages, IDocumentationPage } from '../helpers/structure';
import Header from '../components/header/Header';

const Page: React.FC = ({ children }) => {
  const [pageTitle, setPageTitle] = useState('');

  return (
    <IonPage>
      <Route path='/maincode-ui/' exact={true} render={() => <Redirect to='/maincode-ui/Overview' />} />
      <IonContent className={styles.ionContent} fullscreen>
        <Header title={pageTitle} githubURL='https://github.com/maincode-org/maincode-ui' />
        {documentationPages.map((c, i) => (
          <Route
            key={i}
            path={`/maincode-ui${c.url}`}
            render={() => {
              setPageTitle(c.title);
              return makeContent(c);
            }}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

const makeContent = (c: IDocumentationPage): React.ReactNode => (
  <>
    <DocumentationSection description={<h3>{c.description}</h3>}>
      <ExampleComponent text={c?.title ?? ''} />
    </DocumentationSection>
  </>
);
export default Page;
