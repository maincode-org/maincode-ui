import { IDocumentationPageContent, IPreview, LiveCodeEditor, jsxExample } from 'maincode-ui';
import liveCodeEditorLight from 'assets/LiveCodeEdit-light.png';
import liveCodeEditorDark from 'assets/LiveCodeEdit-dark.png';

const codeExample = `
const jsxExample = "${jsxExample.trim()}";

<LiveCodeEditor code={jsxExample} />
`;

export const liveEditorDocumentation: IDocumentationPageContent = {
  description: <p>Play around with the Maincode UI components and get instant feedback. </p>,
  codeExamples: [
    {
      title: 'Advanced example',
      description: 'Spawning a live code editor with no inline requires a "<code>render()</code>" call in the code string.',
      code: codeExample,
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
