import { LiveCodeEditor, Table, InfoArea } from 'maincode-ui';

const scrollbarStyleExample = `import React, { useEffect } from 'react';
import styleScrollbar from 'maincode-ui';

const App: React.FC = () => {
  useEffect(() => {
    styleScrollbar();
  }, []);

  return <p>Some app</p>;
};`;

const DocumentationPage: JSX.Element = (
  <>
    <p>
      The <code>maincode-ui/styles/theme.css</code> file provides a base theme. To customize the theme you can overwrite relevant CSS variables. We generally use the <b>Ionic theme</b> variable names,
      with a few <b>Maincode UI</b> additions.
    </p>
    <p>
      To do this, create a new <code>theme.css</code> file, and apply assign values to the CSS variables described in the{' '}
      <a className='decoration-none' href='https://ionicframework.com/docs/theming/color-generator' target='_blank' rel='noreferrer'>
        Ionic Documentation.
      </a>
    </p>
    <p>
      Besides the <b>Ionic</b> variables, we also provide the following <b>Maincode UI</b> specific variables:
    </p>
    <Table
      title='Additional variables'
      properties={[
        { label: '<code>--text-color-alt</code>', value: 'Modifies alternative texts such as sub-headers, which deviate from the <code>--ion-text-color</code>' },
        { label: '<code>--border-color</code>', value: 'Modifies the border color set on Maincode UI components' },
        { label: '<code>--color-glass</code>', value: 'Modifies the coloring of elements with the glassy background effects' },
        { label: '<code>--border-glass</code>', value: 'Modifies the supplementary border color for elements with the glassy background effect' },
        { label: '<code>--shadow</code>', value: 'Modifies the theme-shadow. This is used on selective Maincode UI elements.' },
        { label: '<code>--card-shadow</code>', value: 'Modifies the custom card shadow - used on Maincode UI cards only' },
        { label: '<code>--code-background-color</code>', value: 'Modifies the background color of the code HTML element' },
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
    <p>We provide a helper to style the scrollbar. It can be used after the app is mounted: </p>
    <LiveCodeEditor code={scrollbarStyleExample} enablePreview={false} />
    <br />
    <InfoArea>
      <b>Note</b> that this helper is called automatically when the <code>ThemeContext</code> changes, allowing for separate dark mode scrollbar styling. If you are using our <code>ThemeContext</code>
      , you don&apos;t have to import the script.
    </InfoArea>
    <p>The look of the scrollbar can be modified in the theme.css file through the following set of CSS theme variables:</p>
    <Table
      title='Additional variables'
      properties={[
        { label: '<code>--scroll-color</code>', value: 'Modifies the default color of the scrollbar thumb' },
        { label: '<code>--scroll-color-hover</code>', value: 'Modifies the color of the scrollbar thumb on hover' },
        { label: '<code>--scroll-color-active</code>', value: 'Modifies the color of the scrollbar while pressed' },
      ]}
    />
  </>
);
export default DocumentationPage;
