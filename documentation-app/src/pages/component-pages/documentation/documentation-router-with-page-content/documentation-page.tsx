import { IDocumentationPageContent, InfoArea } from 'maincode-ui';
import { routeExample } from './examples';

export const documentationRouterPageDocumentation: IDocumentationPageContent = {
  description: (
    <>
      <p>
        This components manages the routing of the <code>DocumentationApp</code> components.
      </p>
    </>
  ),
  mainText: (
    <>
      <p>
        It works by providing{' '}
        <a href='https://github.com/maincode-org/maincode-ui/blob/main/src/components/documentation-components/types.ts' target='_blank' rel='noreferrer'>
          IDocumentationPage&apos;s{' '}
        </a>
        as a prop and wrapping the rest of the apps route&apos;s inside. It auto generates all the routes necessary for the pages to be available.
      </p>
      <InfoArea>
        In most cases, you would want to use this component in collaboration with the <code>DocumentationApp</code> component.
      </InfoArea>
    </>
  ),
  codeExamples: [
    {
      title: 'Basic example',
      code: routeExample,
      enablePreview: false,
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
      title: 'pages',
      description: 'All pages in which you want routing for',
      type: '<a href="https://github.com/maincode-org/maincode-ui/blob/main/src/components/documentation-components/types.ts" target="_blank" rel="noreferrer">IDocumentationPage[]</a>',
      required: true,
    },
    {
      title: 'githubURL',
      description: 'URL for your GitHub',
      type: 'string',
      required: false,
    },
  ],
};
