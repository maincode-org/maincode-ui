import { IDocumentationPageContent, PaginationFooter } from 'maincode-ui';
import { basicExample } from './examples';
import { styles } from './styles';

export const paginationFooterPageDocumentation: IDocumentationPageContent = {
  description: <p>Create a footer with links to previous and next item.</p>,
  codeExamples: [
    {
      title: 'Basic example',
      code: basicExample,
      scope: { PaginationFooter },
    },
  ],
  props: [
    { title: 'prev', description: 'Data used to render the left navigation element', required: false, type: 'IFooterNav' },
    { title: 'next', description: 'Data used to render the right navigation element', required: false, type: 'IFooterNav' },
    { title: 'className', description: 'Classes for custom styling', required: false, type: 'string', defaultValue: '""' },
  ],
  styles: styles,
};
