import { useState, useRef, useEffect } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { DocumentationSection, IFooterNav, Header, IDocumentationPage } from 'maincode-ui';

import { allPages } from 'structure/assembly';
import { urlPrefix } from '../structure/url-prefix';
import styles from './page-routes-content.module.css';

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
      <Route path={`${urlPrefix}/`} exact={true} render={() => <Redirect to={`${urlPrefix}/overview`} />} />
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
          path={c.url}
          exact={true}
          render={() => makeContent(c, setPageTitle, scrollToTop, { title: elements[i - 1]?.title, URL: elements[i - 1]?.url }, { title: elements[i + 1]?.title, URL: elements[i + 1]?.url })}
        />
      ))}
    </>
  );
};

const makeContent = (c: IDocumentationPage, setTitle: (title: string) => void, scrollToTop: () => void, prevNav?: IFooterNav, nextNav?: IFooterNav): React.ReactNode => (
  <DocumentationSection
    className='px-2'
    onContentLoad={() => {
      setTitle(c.title);
      scrollToTop();
    }}
    description={c.description}
    props={c.props}
    styles={c.styles}
    customContent={c.customContent}
    prevNav={prevNav}
    nextNav={nextNav}
  />
);
export default PageRoutesContent;
