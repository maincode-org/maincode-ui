import { IDocumentationPageContent, CopyArea } from 'maincode-ui';

export const copyAreaPageDocumentation: IDocumentationPageContent = {
  description: <p>Displays single commands with a click action for seamless clipboard copying.</p>,
  codeExamples: [
    {
      title: 'Basic example',
      description: <>CopyArea copies the command provided to it to the clipboard.</>,
      code: `<div className="p-16">
  <CopyArea command="npm i maincode-ui"/>
</div>`,
      scope: { CopyArea },
    },
  ],
  props: [
    { title: 'command', description: 'The command copied to the clipboard', required: true, type: 'string' },
    { title: 'tooltip', description: 'The tooltip text shown on hover', required: false, type: 'string', defaultValue: 'Copy to clipboard' },
    { title: 'className', description: 'Classes for custom styling', required: false, type: 'string', defaultValue: '""' },
  ],
  styles: [
    { propertyName: '--glass-bg', description: 'This is a glass effect on the background' },
    { propertyName: '--theme-border', description: 'Border matching the theme' },
  ],
};
