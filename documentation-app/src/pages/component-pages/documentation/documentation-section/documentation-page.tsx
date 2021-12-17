import { IDocumentationPageContent, InfoArea } from 'maincode-ui';
import { basicCodeExample } from './examples';
import { props } from './props';

export const documentationSectionPageDocumentation: IDocumentationPageContent = {
  description: <p>Creates a consistent, readable template for your documentation page layout.</p>,
  mainText: (
    <InfoArea className='mt-3'>
      <code>DocumentationRouterWithPageContent</code> uses this component internally to render the pages provided to it. Using the router component is preferred in most cases to bake in routing and
      have the sections automatically generated.
    </InfoArea>
  ),
  codeExamples: [
    {
      title: 'Basic example',
      code: basicCodeExample,
      enablePreview: false,
    },
  ],
  props: props,
};
