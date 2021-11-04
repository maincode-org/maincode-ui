import { IEntityCategory, Table, ParticleContainer } from 'maincode-ui';
import { prepareURLPrefixComponents } from './url-prefix';
import { tablePageDocumentation } from '../pages/component-pages/layout/table/documentation-page';
import { particleContainerDocumentation } from '../pages/component-pages/layout/particle-container/documentation-page';
import styles from './../pages/component-pages/layout/particle-container/particle-control-demo/particle-control-demo.module.css';

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
    {
      url: '/particle-container',
      title: 'Particle Container',
      ...particleContainerDocumentation,
      preview: {
        element: (
          <div className={`${styles.bgRedBlue} ${styles.preview} w-full h-full rounded relative`}>
            <ParticleContainer className='h-full w-full' />
          </div>
        ),
      },
    },
  ],
});
