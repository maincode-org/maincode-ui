import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { urlPrefix } from './structure/url-prefix';

/** Page and menu content */
import { allComponentCategoryPages, allPages } from './structure/assembly';
import { guidePages } from './structure/guides';

import robot from './assets/maincode-robot.png';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/** Maincode dependencies. */
import { Menu, DocumentationRouterWithPageContent } from 'maincode-ui';
import 'maincode-ui/dist/index.css';
import 'maincode-ui/styles/generics.css';
import 'maincode-ui/styles/theme.css';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId='main'>
          <Menu
            entityPages={allComponentCategoryPages}
            guidePages={guidePages}
            headerText='Maincode UI Documentation'
            subHeader={
              <>
                By <a href='https://maincode.dk'>maincode.dk</a>
              </>
            }
            bottomImage={robot}
          />
          <IonRouterOutlet id='main'>
            <Route path='/' exact={true}>
              <Redirect to={allPages?.[0].url} />
            </Route>
            <Route
              path={`${urlPrefix}/`}
              render={() => (
                <>
                  <DocumentationRouterWithPageContent pages={allPages} githubUrl='https://github.com/maincode-org/maincode-ui' />
                  <Route path={`${urlPrefix}/`} exact={true} render={() => <Redirect to={allPages?.[0].url} />} />
                </>
              )}
            />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};
export default App;
