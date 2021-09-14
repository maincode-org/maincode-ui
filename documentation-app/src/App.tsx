import { useContext, useEffect } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/menu/Menu';
import { ThemeContext } from './contexts/theme';

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

/* Theme variables */
import './theme/variables.css';

/** Maincode dependencies. */
import 'maincode-ui/dist/index.css';
import 'maincode-ui/styles/generics.css';
import 'maincode-ui/styles/theme.css';
import { styleScrollbars } from 'maincode-ui';
import Page from './pages/Page';

const App: React.FC = () => {
  const themeName = useContext(ThemeContext)?.themeName;

  useEffect(() => {
    setTimeout(() => styleScrollbars(), 100);
  }, [themeName]);

  return (
    <IonApp className={themeName}>
      <IonReactRouter>
        <IonSplitPane contentId='main'>
          <Menu />
          <IonRouterOutlet id='main'>
            <Route path='/' exact={true}>
              <Redirect to='/maincode-ui/Overview' />
            </Route>
            <Route path='/maincode-ui/' component={Page} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};
export default App;
