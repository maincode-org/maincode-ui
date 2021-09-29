import { jsxExample } from 'maincode-ui';

export const advancedCodeExample = `
const jsxExample = "${jsxExample.trim()}";

<LiveCodeEditor code={jsxExample} noInline={true} />
`;

export const basicCodeExample = `
<LiveCodeEditor
  code="<IonButton>An ion button!</IonButton>"
  scope={{IonButton}}
/>
`;
