import { IDocumentationPageContent, InfoArea } from 'maincode-ui';
import { styles } from './styles';

export const menuPageDocumentation: IDocumentationPageContent = {
  description: (
    <p>A full sidemenu for application navigation. It is specifically made for the format used with the documentation components in this library, but can be used for any case with similar layouts.</p>
  ),
  mainText: (
    <InfoArea className='mt-3'>
      The <code>DocumentationApp</code> component uses this <code>Menu</code> component internally.
    </InfoArea>
  ),
  codeExamples: [
    {
      title: 'Basic example',
      description: <p>This code example has references to content for this site, which can be seen in the GitHub repository.</p>,
      code: `
<Menu
  guidePages={guidePages}
  entityPages={entityCollection}
  headerText="Maincode UI"
  subHeader={menuSubHeader}
  footerImage={menuFooterImage}
/>
`,
      enablePreview: false,
    },
  ],
  props: [
    {
      title: 'guidePages',
      description: 'The pages for which to create the basic menu entries shown at the very top',
      required: true,
      type: '<a href="https://github.com/maincode-org/maincode-ui/blob/main/src/components/documentation-components/types.ts" target="_blank" rel="noreferrer">IDocumentationPage[]</a>',
    },
    {
      title: 'entityPages',
      description: 'The pages of which to create the component menu entries, with their own sections',
      required: true,
      type: '<a href="https://github.com/maincode-org/maincode-ui/blob/main/src/components/documentation-components/types.ts" target="_blank" rel="noreferrer">IEntityCategory[]</a>',
    },
    { title: 'headerText', description: 'The top header', required: true, type: 'string' },
    { title: 'subHeader', description: 'The subheader', required: false, type: 'string' },
    { title: 'footerImage', description: 'An optional image rendered in the footer of the menu', required: false, type: 'string' },
    { title: 'className', description: 'Classes for custom styling', required: false, type: 'string', defaultValue: '""' },
  ],
  styles: styles,
};
