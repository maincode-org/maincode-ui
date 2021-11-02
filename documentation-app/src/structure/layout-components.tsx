import { IEntityCategory, Table } from 'maincode-ui';
import { prepareURLPrefixComponents } from './url-prefix';
import { tablePageDocumentation } from '../pages/component-pages/layout/table/documentation-page';

export const layoutComponentPages: IEntityCategory = prepareURLPrefixComponents({
  title: 'Layout Components',
  pages: [
    {
      url: '/table',
      title: 'Table',
      preview: {
        element: (
          <Table
            title='Styles'
            properties={[
              { label: 'Label 1', value: 'Value 1' },
              { label: 'Label 2', value: 'Value 2' },
            ]}
          />
        ),
      },
      ...tablePageDocumentation,
    },
  ],
});
