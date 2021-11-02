import { IDocumentationPageContent, InfoArea } from 'maincode-ui';
import { styles } from './styles';

export const menuPageDocumentation: IDocumentationPageContent = {
  description: <p>Create simple menu for application navigation.</p>,
  mainText: <InfoArea className='mt-3'>The DocumentationApp component uses the Menu component internally.</InfoArea>,
  codeExamples: [
    {
      title: 'Basic example',
      code: `
<Menu
  entityPages={entityCollection}
  guidePages={guidePages}
  headerText="Maincode UI"
  subHeader={menuSubHeader}
  footerImage={menuFooterImage}
/>
`,
      enablePreview: false,
    },
  ],
  props: [
    { title: 'entityPages', description: 'The pages of which to create the component menu entries', required: true, type: 'IEntityCategory[]' },
    { title: 'guidePages', description: 'The pages of which to create the basic menu entries', required: true, type: 'IDocumentationPage[]' },
    { title: 'headerText', description: 'Menu header', required: true, type: 'string' },
    { title: 'subHeader', description: 'Menu subheader', required: false, type: 'string' },
    { title: 'footerImage', description: 'Image rendered in the footer of the menu', required: false, type: 'string' },
    { title: 'className', description: 'Classes for custom styling', required: false, type: 'string', defaultValue: '""' },
  ],
  styles: styles,
};
