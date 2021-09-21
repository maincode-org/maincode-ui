import { LiveCodeEditor } from 'maincode-ui';

const scrollbarStyleExample = `
import { styleScrollbars } from '../utilities/style-scrollbar';

  useEffect(() => {
    styleScrollbars();
  }, []);`;

const DocumentationPage: JSX.Element = (
  <>
    <p>
      The <span className='glass-bg'>maincode-ui/styles/theme.css</span> file provides a base theme. To customize the theme you can overwrite relevant CSS variables. We generally use the{' '}
      <b>Ionic theme</b> variable names, with a few <b>Maincode UI</b> additions.
    </p>
    <p>
      To do this, create a new theme.css file, and apply assign values to the CSS variables described in the Ionic documentation{' '}
      <a href='https://ionicframework.com/docs/theming/color-generator'>here.</a>
    </p>
    <br />
    <br />
    <h3>Styling of scroll-bar</h3>
    <p>Additionally the library provides a way to style the scrollbar of your application. </p>
    <p>An example of how to utilize this function is shown below. </p>
    <LiveCodeEditor isDarkMode={true} enablePreview={false} code={scrollbarStyleExample} />
  </>
);
export default DocumentationPage;
