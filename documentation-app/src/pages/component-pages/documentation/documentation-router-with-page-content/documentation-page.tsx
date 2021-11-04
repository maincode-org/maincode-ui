import { IDocumentationPageContent, InfoArea } from 'maincode-ui';
import { routeExample } from './examples';

export const documentationRouterPageDocumentation: IDocumentationPageContent = {
  description: <p>Easily set up the routing of your application.</p>,
  mainText: <InfoArea>In most cases, you would want to use this component in collaboration with the DocumentationApp component.</InfoArea>,
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
      type: 'IDocumentationPage[]',
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
