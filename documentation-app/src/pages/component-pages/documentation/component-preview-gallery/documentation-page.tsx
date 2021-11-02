import { IDocumentationPageContent, ComponentPreviewGallery, InfoArea, PrettyList, CopyButton } from 'maincode-ui';
import { basicCodeExample } from './examples';

export const componentPreviewGalleryDocumentation: IDocumentationPageContent = {
  description: <p>Create a preview of your components, pages etc. in a responsive grid structure.</p>,
  codeExamples: [
    {
      title: 'Basic example',
      code: basicCodeExample,
      scope: { ComponentPreviewGallery, InfoArea, PrettyList, CopyButton },
    },
  ],
  props: [
    { title: 'className', description: 'Classes for custom styling', type: 'string', required: false, defaultValue: '""' },
    { title: 'componentPages', description: 'Data for the components', type: 'IDocumentationPage[]', required: true },
  ],
  styles: [
    { propertyName: '--border-color', description: 'Border matching the theme' },
    { propertyName: '--ion-text-color', description: 'Controls text color of your application' },
  ],
};
