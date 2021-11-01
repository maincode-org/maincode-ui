import { IDocumentationPageContent, InfoArea } from 'maincode-ui';
import { basicCodeExample } from './examples';
import { props } from './props';

export const documentationSectionPageDocumentation: IDocumentationPageContent = {
  description: <p>Create a consistent, readable template for your documentation page layout.</p>,
  mainText: (
    <InfoArea className='mt-3'>
      DocumentationRouterWithPageContent uses this component internally to render the pages provided to it. Using DocumentationRouterWithPageContent will in most cases provide a great advantage.
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
