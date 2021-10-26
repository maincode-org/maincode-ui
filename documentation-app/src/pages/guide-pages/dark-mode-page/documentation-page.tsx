import { LiveCodeEditor, InfoArea } from 'maincode-ui';
import { darkModeClassesExample, darkModeExample, themeContextExample } from './code-examples';

const DocumentationPage: JSX.Element = (
  <>
    <p>
      The dark mode of the application is controlled by toggling the classnames <code>{`"light"`}</code> and <code>{`"dark"`}</code> on the <code>body</code> element.
    </p>
    <p>
      The library provides a context <code>ThemeContext</code> to manage and apply the dark and light mode themes.
    </p>
    <p>Enable it by applying the context on the root element of your app as shown below.</p>
    <LiveCodeEditor code={darkModeExample} enablePreview={false} />
    <p>You can customize your dark mode theme by setting values for any CSS variable in your custom theme file.</p>
    <p>
      The variables must be on the <code>body.dark</code> element, and also apply for <code>.md body.dark</code> and <code>.ios body.dark</code> elements. The reason is that dark mode is set as a
      classname on the <code>body</code> element with values
      <code>{`"light"`}</code> or <code>{`"dark"`}</code>.
    </p>
    <br />
    <LiveCodeEditor code={darkModeClassesExample} language={'css'} enablePreview={false} />
    <br />
    <p>
      This approach lets you use any variable, like <code>--ion-text-color</code> in your app, and have it automatically adapt to dark mode.
    </p>
    <br />
    <h3>Setting and reading dark mode manually</h3>
    <p>
      The provided <code>ThemeContext</code> allows you to toggle and read the state of the app theme. This is useful when making toggle buttons for dark mode, or adapting components dynamically based
      on theme changes.
    </p>
    <p>It can be used as shown in the modifiedThemeContext example below:</p>
    <LiveCodeEditor code={themeContextExample} enablePreview={false} />
    <br />
    <InfoArea>
      The context also sets the mode in the browsers <code>localStorage</code> under the <code>themeName</code> key, automatically saving the clients selected theme and loading it by default on future
      visits.
    </InfoArea>
  </>
);
export default DocumentationPage;
