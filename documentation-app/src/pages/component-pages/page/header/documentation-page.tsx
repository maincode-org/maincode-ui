import { IDocumentationPageContent } from 'maincode-ui';

export const headerPageDocumentation: IDocumentationPageContent = {
  description: <p>Customizable header bar.</p>,
  codeExamples: [
    {
      title: 'Basic example',
      code: `
<Header
  className='select-none'
  title="Title"
  githubURL="github.com/orgs/maincode"
  versionLabel="1.1.2"
/>
`,
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
