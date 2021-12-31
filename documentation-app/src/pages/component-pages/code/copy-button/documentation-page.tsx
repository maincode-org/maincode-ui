import { IDocumentationPageContent, CopyButton } from 'maincode-ui';

export const copyButtonPageDocumentation: IDocumentationPageContent = {
  description: <p>Copy text or commands to the clipboard with the click of a button.</p>,
  codeExamples: [
    {
      title: 'Basic example',
      description: (
        <p>
          This button will copy the text <code>npm i maincode-ui</code> to the users clipboard.
        </p>
      ),
      code: `
<div className="h-full flex justify-center mt-6">
  <CopyButton code="npm i maincode-ui"/>
</div>`,
      scope: { CopyButton },
    },
  ],
  props: [
    { title: 'code', description: 'The command copied to the clipboard', required: true, type: 'string' },
    { title: 'className', description: 'Classes for custom styling', required: false, type: 'string', defaultValue: '""' },
  ],
  styles: [
    { propertyName: '--ion-text-color', description: 'Controls the text color of your application' },
    { propertyName: '--border-color', description: 'Border matching the theme' },
    { propertyName: '--card-shadow', description: 'A shadow matching the theme' },
  ],
};
