import { IDocumentationPageContent } from 'maincode-ui';

export const documentationAppPageDocumentation: IDocumentationPageContent = {
  description: <p>Spawn a whole documentation application with the exact same features as Maincode UI documentation application.</p>,
  codeExamples: [
    {
      title: 'Basic example',
      code: `
<DocumentationApp
  guidePages={guidePages}
  entityCollection={allComponentCategoryPages}
  urlPrefix={urlPrefix}
  headerGithubURL='https://github.com/maincode-org/maincode-ui'
  menuSubHeader="By <a href='https://maincode.dk'>maincode.dk</a>"
  menuHeaderText='Maincode UI Documentation'
  menuFooterImage={robot}
/>`,
      enablePreview: false,
    },
  ],
  props: [
    { title: 'guidePages', description: 'The basic documentation pages such as Overview, Quickstart, Contributions etc.', required: true, type: 'IDocumentationPage[]' },
    { title: 'entityCollection', description: 'Collection of your all entities (components you want to document).', required: true, type: 'IEntityCategory[]' },
    { title: 'urlPrefix', description: 'The URL prefix of your application before the unique component URL.', required: false, type: 'string' },
    { title: 'headerGithubURL', description: 'The URL to your GitHub page provided to the GitHub link in the header', required: false, type: 'string' },
    { title: 'menuSubHeader', description: 'The menu subheader', required: false, type: 'string' },
    { title: 'menuHeaderText', description: 'The menu header text', required: false, type: 'string' },
    { title: 'menuFooterImage', description: 'Image shown in the footer of the menu', required: false, type: 'string' },
  ],
};
