import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './utils/serviceWorkerRegistration';
import reportWebVitals from './utils/reportWebVitals';

import { ThemeProvider, DocumentationApp } from 'maincode-ui';

import { guidePages } from './structure/guide-pages';
import { allComponentCategoryPages } from './structure/assembly';
import { urlPrefix } from './structure/url-prefix';
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
import 'maincode-ui/dist/index.css';
import 'maincode-ui/styles/generics.css';
import 'maincode-ui/styles/tail-generics.css';
import 'maincode-ui/styles/theme.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <DocumentationApp
        guidePages={guidePages}
        entityCollection={allComponentCategoryPages}
        urlPrefix={urlPrefix}
        headerGithubURL='https://github.com/maincode-org/maincode-ui'
        menuSubHeader="By <a href='https://maincode.dk'>maincode.dk</a>"
        menuHeaderText='Maincode UI Documentation'
        menuFooterImage={robot}
      />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
