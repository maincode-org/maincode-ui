import { LiveCodeEditor } from 'maincode-ui';

const darkModeClassesExample = `body.dark,
.ios body.dark,
.md body.dark {
  --ion-text-color: #bdbddd;
  --ion-color-primary: #dd7500 !important;
  ...;
}`;

const DocumentationPage: JSX.Element = (
  <>
    <p>You can customize your dark mode theme by setting values for any CSS variable in your custom theme file.</p>
    <p>
      The variables must be on the <code className='glass-bg p-05 rounded'>body.dark</code> element, and also apply for <code className='glass-bg p-05 rounded'>.md body.dark</code> and{' '}
      <code className='glass-bg p-05 rounded'>.ios body.dark</code> elements. The reason is that dark mode is set as a classname on the <code className='glass-bg p-05 rounded'>body</code> element with
      values
      <code className='glass-bg p-05 rounded'>{`"light"`}</code> or <code className='glass-bg p-05 rounded'>{`"dark"`}</code>.
    </p>
    <br />
    <LiveCodeEditor isDarkMode={true} enablePreview={false} code={darkModeClassesExample} />
    <br />
    <p>
      This approach lets you use any variable, like <code className='glass-bg p-05 rounded'>--ion-text-color</code> in your app, and have it automatically adapt to dark mode.
    </p>
    <h3>Setting and reading dark mode manually</h3>
    <p>
      The provided theme context allows you to toggle and read the state of the app theme. This is useful when making toggle buttons for dark mode, or adapting components dynamically based on theme
      changes.
    </p>
  </>
);
export default DocumentationPage;
