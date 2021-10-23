import React, { useState, useRef, useEffect } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Route } from 'react-router-dom';
import { IDocumentationPage } from 'components/documentation-components/types';
import DocumentationSection from 'components/documentation-components/documentation-section/DocumentationSection';
import Header from 'components/page-components/header/Header';
import styles from './documentation-router-with-page-content.module.css';
import { IFooterNav } from 'components/page-components/pagination-footer/PaginationFooter';

type IProps = {
  pages: IDocumentationPage[];
  githubUrl?: string;
};

const DocumentationRouterWithPageContent: React.FC<IProps> = ({ githubUrl, pages, children }) => {
  const [pageTitle, setPageTitle] = useState('');
  const [routes, setRoutes] = useState<JSX.Element[]>();
  const ionContentRef = useRef<HTMLIonContentElement>(null);

  useEffect(() => {
    setRoutes(makeRoutes(pages, setPageTitle, scrollToTop));
  }, [pages]);

  const scrollToTop = () => ionContentRef.current && ionContentRef?.current.scrollToTop(200);

  return (
    <IonPage>
      <Header className='select-none' title={pageTitle} githubURL={githubUrl} />
      <IonContent ref={ionContentRef} className={styles.ionContent} fullscreen>
        {routes}
        {children}
      </IonContent>
    </IonPage>
  );
};

const makeRoutes = (allPages: IDocumentationPage[], setPageTitle: (value: React.SetStateAction<string>) => void, scrollToTop: () => void): JSX.Element[] =>
  allPages.map((c, i, elements) => (
    <Route
      key={i}
      path={c.url}
      exact={true}
      render={() => makeContent(c, setPageTitle, scrollToTop, { title: elements[i - 1]?.title, URL: elements[i - 1]?.url }, { title: elements[i + 1]?.title, URL: elements[i + 1]?.url })}
    />
  ));

const makeContent = (c: IDocumentationPage, setTitle: (title: string) => void, scrollToTop: () => void, prevNav?: IFooterNav, nextNav?: IFooterNav): React.ReactNode => (
  <DocumentationSection
    className='px-2'
    onContentLoad={() => {
      setTitle(c.title);
      scrollToTop();
    }}
    description={c.description}
    mainText={c.mainText}
    props={c.props}
    styles={c.styles}
    codeExamples={c.codeExamples}
    prevNav={prevNav}
    nextNav={nextNav}
  >
    {c.customContent}
  </DocumentationSection>
);
export default DocumentationRouterWithPageContent;
