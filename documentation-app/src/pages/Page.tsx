import { IonContent, IonPage } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { DocumentationSection, LiveEditExample } from 'maincode-ui';
import { useState, useRef } from 'react';
import styles from './page.module.css';
import { documentationPages, IDocumentationPage } from '../helpers/structure';
import Header from '../components/header/Header';

const Page: React.FC = () => {
  const [pageTitle, setPageTitle] = useState('');

  const ionContentRef = useRef<HTMLIonContentElement>(null);
  const scrollToTop = () => ionContentRef.current && ionContentRef?.current.scrollToTop(200);

  return (
    <IonPage>
      <Route path='/maincode-ui/' exact={true} render={() => <Redirect to='/maincode-ui/Overview' />} />
      <Header className='select-none' title={pageTitle} githubURL='https://github.com/maincode-org/maincode-ui' />
      <IonContent ref={ionContentRef} className={styles.ionContent} fullscreen>
        {documentationPages.map((c, i) => (
          <Route
            key={i}
            path={`/maincode-ui${c.url}`}
            render={() => {
              setPageTitle(c.title);
              scrollToTop();
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
    <DocumentationSection className='px-2 pb-1' description={c.description} props={c.props} styles={c.styles} customContent={c.customContent}>
      {LiveEditExample}
    </DocumentationSection>
  </>
);
export default Page;
