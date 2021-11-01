import { IDocumentationPageContent, Table } from 'maincode-ui';

export const tablePageDocumentation: IDocumentationPageContent = {
  description: <p>Customizable and readable table.</p>,
  codeExamples: [
    {
      title: 'Basic example',
      code: `
<div className='p-1'>
  <Table
    title="Styles"
    properties={[
      { label: 'Description', value: "Some description" },
      { label: 'Type', value: 'string' },
      { label: 'Required', value: 'false' },
      { label: 'Default value', value: 'default value' }
    ]}
  />
</div>
`,
      scope: { Table },
    },
  ],
  props: [
    { title: 'title', description: 'The title of the table', required: true, type: 'string | JSX.Element' },
    {
      title: 'properties',
      description: 'A collection of label + value pairs used to render the contents of the table',
      required: true,
      type: '({ label: string; value: string } | undefined)[]',
    },
    { title: 'className', description: 'Classes for custom styling', required: false, type: 'string', defaultValue: '""' },
  ],
  styles: [
    {
      propertyName: '--ion-background-color',
      description: 'Controls the background color of the theme',
    },
    {
      propertyName: '--ion-text-color',
      description: 'Controls the text color of the theme',
    },
  ],
};
