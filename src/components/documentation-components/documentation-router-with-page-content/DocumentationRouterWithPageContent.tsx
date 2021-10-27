import React, { useState, useRef, useEffect } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { IDocumentationPage } from 'components/documentation-components/types';
import Header from 'components/page-components/header/Header';
import styles from './documentation-router-with-page-content.module.css';
import { makeRoutes } from './helpers';

type IProps = {
  pages: IDocumentationPage[];
  githubUrl?: string;
  className?: string;
};

const DocumentationRouterWithPageContent: React.FC<IProps> = ({ githubUrl, pages, className = '', children }) => {
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
      <IonContent ref={ionContentRef} className={`${className} ${styles.ionContent}`} fullscreen>
        {routes}
        {children}
      </IonContent>
    </IonPage>
  );
};
export default DocumentationRouterWithPageContent;
