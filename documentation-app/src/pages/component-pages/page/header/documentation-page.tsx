import { IDocumentationPageContent } from 'maincode-ui';
import { basicCodeExample } from './examples';

export const headerPageDocumentation: IDocumentationPageContent = {
  description: <p>Customizable header bar.</p>,
  codeExamples: [
    {
      title: 'Basic example',
      code: basicCodeExample,
      enablePreview: false,
    },
  ],
  props: [
    { title: 'title', description: 'The header title', required: false, type: 'string', defaultValue: '""' },
    { title: 'githubURL', description: 'The link to your GitHub', required: false, type: 'string', defaultValue: '""' },
    { title: 'versionLabel', description: 'The version number of your application', required: false, type: 'string', defaultValue: '""' },
    { title: 'className', description: 'Classes for custom styling', required: false, type: 'string', defaultValue: '""' },
  ],
};
