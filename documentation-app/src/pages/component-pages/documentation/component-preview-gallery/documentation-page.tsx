import { IDocumentationPageContent, ComponentPreviewGallery, InfoArea, CopyButton } from 'maincode-ui';

export const componentPreviewGalleryDocumentation: IDocumentationPageContent = {
  description: <p>Create a preview of your components, pages etc. in a responsive grid structure.</p>,
  codeExamples: [
    {
      title: 'Basic Example',
      code: `
<ComponentPreviewGallery
  componentPages={[
  {
    url: '/info-area',
    title: 'Info Area',
    preview: { element: <InfoArea>Example of InfoArea</InfoArea> }
  },
  {
    url: '/copy-button',
    title: 'Copy Button',
    preview: { element: <CopyButton>Example of InfoArea</CopyButton> }
  }]}
  className='my-2'
/>`,
      scope: { ComponentPreviewGallery, InfoArea, CopyButton },
    },
  ],
  props: [
    {
      title: 'className',
      description: 'Classes for custom styling',
      type: 'string',
      required: false,
      defaultValue: '""',
    },
    {
      title: 'componentPages',
      description: 'Data for the components',
      type: 'IDocumentationPage[]',
      required: true,
    },
  ],
  styles: [
    {
      propertyName: '--border-color',
      description: 'Border matching the theme',
    },
    {
      propertyName: '--ion-text-color',
      description: 'Controls text color of your application',
    },
  ],
};
