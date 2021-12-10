import { IDocumentationPageContent, Header } from 'maincode-ui';
import { basicCodeExample } from './examples';

export const headerPageDocumentation: IDocumentationPageContent = {
  description: <p>A customizable header bar. It is positioned as fixed by default, as used at the top of this page, but it can be used relatively like in the example below.</p>,
  codeExamples: [
    {
      title: 'Basic example',
      code: basicCodeExample,
      enablePreview: true,
      scope: { Header },
    },
  ],
  props: [
    { title: 'title', description: 'The header title', required: false, type: 'string', defaultValue: '""' },
    { title: 'githubURL', description: 'The link to your GitHub', required: false, type: 'string', defaultValue: '""' },
    { title: 'versionLabel', description: 'The version number of your application', required: false, type: 'string', defaultValue: '""' },
    { title: 'className', description: 'Classes for custom styling', required: false, type: 'string', defaultValue: '""' },
  ],
};
