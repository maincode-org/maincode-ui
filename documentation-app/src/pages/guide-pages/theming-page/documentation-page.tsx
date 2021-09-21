import { LiveCodeEditor } from 'maincode-ui';

const scrollbarStyleExample = `
import { styleScrollbars } from 'maincode-ui';

  useEffect(() => {
    styleScrollbars();
  }, []);`;

const DocumentationPage: JSX.Element = (
  <>
    <p>
      The <code className='glass-bg p-05 rounded'>maincode-ui/styles/theme.css</code> file provides a base theme. To customize the theme you can overwrite relevant CSS variables. We generally use the{' '}
      <b>Ionic theme</b> variable names, with a few <b>Maincode UI</b> additions.
    </p>
    <p>
      To do this, create a new <code className='glass-bg p-05 rounded'>theme.css</code> file, and apply assign values to the CSS variables described in the Ionic documentation{' '}
      <a className='decoration-none' href='https://ionicframework.com/docs/theming/color-generator' target='_blank' rel='noreferrer'>
        here.
      </a>
    </p>
    <br />
    <p>Besides the Ionic variables, we also provide the following Maincode UI specific variables:</p>
    <ul>
      <li>--text-color-alt</li>
      <li>--color-glass</li>
      <li>--border-color</li>
      <li>--border-glass</li>
      <li>--shadow</li>
      <li>--card-shadow</li>
    </ul>
    <br />
    <h3>Styling of scroll-bar</h3>
    <p>Additionally the library provides a way to style the scrollbar of your application. </p>
    <p>
      It is normally difficult to apply scrollbar styles to Ionic applications{' '}
      <a className='decoration-none' href='https://github.com/ionic-team/ionic-framework/issues/17685' target='_blank' rel='noreferrer'>
        (see their issues)
      </a>
      .
    </p>
    <p>An example of how to utilize this function is shown below. </p>
    <LiveCodeEditor isDarkMode={true} enablePreview={false} code={scrollbarStyleExample} />
    <p>Maincode UI automatically calls this helper on dark mode context changes, allowing for separate dark mode scrollbar styling.</p>
  </>
);
export default DocumentationPage;
