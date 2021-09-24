import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import { IDocumentationPage, IEntityCategory } from '../types';
import DocumentationRouterWithPageContent from '../documentation-router-with-page-content/DocumentationRouterWithPageContent';
import Menu from 'components/page-components/menu/Menu';

type IProps = {
  guidePages: IDocumentationPage[];
  entityCollection: IEntityCategory[];
  menuHeaderText: string;
  menuSubHeader?: string;
  menuFooterImage?: string;
  urlPrefix?: string;
  headerGithubURL?: string;
};

const DocumentationApp: React.FC<IProps> = ({ guidePages, entityCollection, menuHeaderText, menuSubHeader, menuFooterImage, urlPrefix, headerGithubURL }) => {
  const allPages = [...guidePages, ...entityCollection.flatMap((e) => e.pages)];

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId='main'>
          <Menu entityPages={entityCollection} guidePages={guidePages} headerText={menuHeaderText} subHeader={menuSubHeader} footerImage={menuFooterImage} />
          <IonRouterOutlet id='main'>
            <Route path='/' exact={true}>
              <Redirect to={allPages?.[0].url} />
            </Route>
            <Route
              path={`${urlPrefix}/`}
              render={() => (
                <DocumentationRouterWithPageContent pages={allPages} githubUrl={headerGithubURL}>
                  <Route path={`${urlPrefix}/`} exact={true} render={() => <Redirect to={allPages?.[0].url} />} />
                </DocumentationRouterWithPageContent>
              )}
            />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};
export default DocumentationApp;
