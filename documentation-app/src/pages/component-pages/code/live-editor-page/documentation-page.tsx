import { IDocumentationPageContent, IPreview, InfoArea, jsxExample } from 'maincode-ui';
import liveCodeEditorLight from 'assets/LiveCodeEdit-light.png';
import liveCodeEditorDark from 'assets/LiveCodeEdit-dark.png';
import { IonButton } from '@ionic/react';

const advancedCodeExample = `
const jsxExample = "${jsxExample.trim()}";

<LiveCodeEditor code={jsxExample} noInline={true} />
`;

const basicCodeExample = `
render(
  <LiveCodeEditor
    code="<IonButton>An ion button!</IonButton>"
    scope={{IonButton}}
  />
);
`;

export const liveEditorDocumentation: IDocumentationPageContent = {
  description: <p>Play around with the Maincode UI components and get instant feedback. </p>,
  codeExamples: [
    {
      title: 'Basic example',
      description: 'We can use the component to quickly render simple JSX. For example, we can showcase the use of an Ionic button like below.',
      code: '<IonButton>An ion button!</IonButton>',
      scope: { IonButton },
    },
    {
      description: (
        <>
          In order to produce the above example, we can initiate the live code editor with the left-side code. .
          <InfoArea>
            The editor must have <code>IonButton</code> in scope in order to preview it. However, any CSS and classes in scope for the parent component or page will <b>automatically</b> be in scope
            for the code. This extends to theming, and is why the button has styling according to the theme of this page.
          </InfoArea>
        </>
      ),

      code: '<IonButton>An ion button!</IonButton>',
      scope: { IonButton },
    },
    {
      title: 'Advanced example',
      description: 'Spawning a live code editor with no inline requires a "<code>render()</code>" call in the code string.',
      code: advancedCodeExample,
      enablePreview: false,
    },
    {
      description: 'The above example code will produce a code example just like the one shown below here.',
      code: jsxExample,
      noInline: true,
    },
  ],
};

export const liveEditorPreview: IPreview = {
  picture: liveCodeEditorLight,
  darkModePicture: liveCodeEditorDark,
};
