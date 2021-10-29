import { IDocumentationPageContent, CopyButton } from 'maincode-ui';

export const copyButtonPageDocumentation: IDocumentationPageContent = {
  description: <p>Copy sophisticated commands to the clipboard with the click of a button</p>,
  codeExamples: [
    {
      title: 'Basic example',
      description: <p>Description</p>,
      code: '<div className="flex justify-center items-center"><CopyButton code="npm i maincode-ui" /></div>',
      scope: { CopyButton },
    },
  ],
  props: [
    { title: 'command', description: 'The command you want to be copied to the clipboard', required: true, type: 'string' },
    { title: 'tooltip', description: 'The tooltip text you want to be shown on hover', required: false, type: 'string', defaultValue: 'Copy to clipboard' },
    { title: 'className', description: 'Classes for custom styling', required: false, type: 'string', defaultValue: '""' },
  ],
  styles: [
    { propertyName: '--glass-bg', description: 'This is a glass effect on the background' },
    { propertyName: '--theme-border', description: 'Border matching the theme' },
  ],
};
