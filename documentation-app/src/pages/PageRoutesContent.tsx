import { useState, useRef, useEffect } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { DocumentationSection, IFooterNav } from 'maincode-ui';

import { allPages, IDocumentationPage, urlPrefix } from 'structure/assembly';
import styles from './page-routes-content.module.css';
import Header from '../components/header/Header';

const PageRoutesContent: React.FC = () => {
  const [pageTitle, setPageTitle] = useState('');
  const [routes, setRoutes] = useState<JSX.Element>();
  const ionContentRef = useRef<HTMLIonContentElement>(null);

  useEffect(() => {
    setRoutes(makeRoutes(setPageTitle, scrollToTop));
  }, []);

  const scrollToTop = () => ionContentRef.current && ionContentRef?.current.scrollToTop(200);

  return (
    <IonPage>
      <Route path={`${urlPrefix}/`} exact={true} render={() => <Redirect to='/maincode-ui/Overview' />} />
      <Header className='select-none' title={pageTitle} githubURL='https://github.com/maincode-org/maincode-ui' />
      <IonContent ref={ionContentRef} className={styles.ionContent} fullscreen>
        {routes}
      </IonContent>
    </IonPage>
  );
};

const makeRoutes = (setPageTitle: (value: React.SetStateAction<string>) => void, scrollToTop: () => void): JSX.Element => {
  return (
    <>
      {allPages.map((c, i, elements) => (
        <Route
          key={i}
          path={`/maincode-ui${c.url}`}
          exact={true}
          render={() => {
            setPageTitle(c.title);
            return makeContent(c, scrollToTop, { title: elements[i - 1]?.title, URL: elements[i - 1]?.url }, { title: elements[i + 1]?.title, URL: elements[i + 1]?.url });
          }}
        />
      ))}
    </>
  );
};

const makeContent = (c: IDocumentationPage, scrollToTop: () => void, prevNav?: IFooterNav, nextNav?: IFooterNav): React.ReactNode => (
  <DocumentationSection
    className='px-2'
    onContentLoad={scrollToTop}
    description={c.description}
    props={c.props}
    styles={c.styles}
    customContent={c.customContent}
    prevNav={prevNav}
    nextNav={nextNav}
    urlPrefix={urlPrefix}
  />
);
export default PageRoutesContent;
