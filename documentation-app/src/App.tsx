import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { Menu } from 'maincode-ui';
import PageRoutesContent from './pages/PageRoutesContent';
import { urlPrefix } from './structure/url-prefix';
import { allComponentCategoryPages } from './structure/assembly';
import { guidePages } from './structure/guides';

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
import 'maincode-ui/dist/index.css';
import 'maincode-ui/styles/generics.css';
import 'maincode-ui/styles/theme.css';
import React from 'react';

const App: React.FC = () => {
  return (
    <IonApp className='light'>
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
          />
          <IonRouterOutlet id='main'>
            <Route path='/' exact={true}>
              <Redirect to={`${urlPrefix}/overview`} />
            </Route>
            <Route path={`${urlPrefix}/`} component={PageRoutesContent} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};
export default App;
