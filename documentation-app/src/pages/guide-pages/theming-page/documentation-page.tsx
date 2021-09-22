import { LiveCodeEditor, Table } from 'maincode-ui';
import React from 'react';

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
    <Table
      title='Additional variables'
      properties={[
        { label: '<code>--text-color-alt</code>', value: 'Modifies alternative texts such as sub-headers, which deviate from the --ion-text-color' },
        { label: '<code>--border-color</code>', value: 'Modifies the border color set on Maincode UI components' },
        { label: '<code>--color-glass</code>', value: 'Modifies the coloring of elements with the glassy background effects' },
        { label: '<code>--border-glass</code>', value: 'Modifies the supplementary border color for elements with the glassy background effect' },
        { label: '<code>--shadow</code>', value: 'Modifies the theme-shadow. This is used on selective Maincode UI elements.' },
        { label: '<code>--card-shadow</code>', value: 'Modifies the custom card shadow - used on Maincode UI cards only' },
      ]}
    />
    <br />
    <h3>Styling of scrollbar</h3>
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
