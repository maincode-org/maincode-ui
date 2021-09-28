import { IDocumentationPageContent, IPreview, InfoArea, jsxExample, LiveCodeEditor, IPropertyDetail, IStyleDetail } from 'maincode-ui';
import liveCodeEditorLight from 'assets/LiveCodeEdit-light.png';
import liveCodeEditorDark from 'assets/LiveCodeEdit-dark.png';
import { IonButton } from '@ionic/react';

const advancedCodeExample = `
const jsxExample = "${jsxExample.trim()}";

<LiveCodeEditor code={jsxExample} noInline={true} />
`;

const basicCodeExample = `
<LiveCodeEditor
  code="<IonButton>An ion button!</IonButton>"
  scope={{IonButton}}
/>
`;

const liveEditorProps: IPropertyDetail[] = [
  {
    title: '..',
    description: '..',
    attribute: '..',
    type: '..',
    defaultValue: '..',
  },
];

const liveEditorStyles: IStyleDetail[] = [
  {
    className: '..',
    description: '..',
  },
];

export const liveEditorDocumentation: IDocumentationPageContent = {
  description: (
    <p>
      Showcase editable React, JSX or HTML code snippets with a live preview. This component is based on the <a href='https://github.com/FormidableLabs/react-live'>React Live library</a>.
    </p>
  ),
  mainText: (
    <>
      <InfoArea>
        Note that this component is currently not compatible with <code>React v. 17+</code> projects, due to the <a href='https://github.com/FormidableLabs/react-live'>React Live v. 2.3.0</a>{' '}
        library&apos;s incompatibility with <code>React v. {'>'} 16.14</code>. We will upgrade the version as soon as possible and have opened an{' '}
        <a href='https://github.com/maincode-org/maincode-ui/issues/53'>issue</a> which can be monitored for updates.
      </InfoArea>
    </>
  ),
  codeExamples: [
    {
      title: 'Basic example',
      description: <>We can use the component to quickly render simple JSX. For example, we can showcase the use of an Ionic button like below.</>,
      code: '<IonButton>An ion button!</IonButton>',
      scope: { IonButton },
    },
    {
      description: (
        <>
          <p>In order to produce the above example, we can initiate the live code editor with the code below. </p>
          <InfoArea>
            The editor must have <code>IonButton</code> in scope in order to preview it. However, any CSS and classes in scope for the parent component or page will <b>automatically</b> be in scope
            for the code. This extends to theming, and is why the button has styling according to the theme of this page.
          </InfoArea>
        </>
      ),
      enablePreview: false,
      code: basicCodeExample,
    },
    {
      title: 'Advanced example',
      description: (
        <>
          Spawning a live code editor with no inline requires a &quot;<code>render()</code>&quot; call in the code string.
        </>
      ),
      code: advancedCodeExample,
      enablePreview: false,
    },
    {
      description: <>The above example code will produce a code example just like the one shown below here.</>,
      code: jsxExample,
      noInline: true,
    },
  ],
  props: liveEditorProps,
  styles: liveEditorStyles,
};

export const liveEditorPreview: IPreview = {
  picture: liveCodeEditorLight,
  darkModePicture: liveCodeEditorDark,
};
