import { IDocumentationPageContent, Table } from 'maincode-ui';
import { basicCodeExample } from './examples';

export const tablePageDocumentation: IDocumentationPageContent = {
  description: <p>A specialized, while customizable, table component. Currently only supports two columns of custom width ratio&apos;s. Its best suited for describing code or for dictionaries.</p>,
  codeExamples: [
    {
      title: 'Basic example',
      code: basicCodeExample,
      scope: { Table },
    },
  ],
  props: [
    { title: 'title', description: 'The title of the table', required: true, type: 'string | JSX.Element' },
    {
      title: 'leftWidthPct',
      description: 'The width, in percentage, of the first column in the table. The second column width is automatically calculated.',
      required: false,
      type: 'number',
      defaultValue: '20',
    },
    { title: 'properties', description: 'A collection of label + value pairs used to render the contents of the table', required: true, type: '({ label: string; value: string } | undefined)[]' },
    { title: 'className', description: 'Classes for custom styling', required: false, type: 'string', defaultValue: '""' },
  ],
  styles: [
    { propertyName: '--ion-background-color', description: 'Controls the background color of the theme' },
    { propertyName: '--ion-text-color', description: 'Controls the text color of the theme' },
  ],
};
