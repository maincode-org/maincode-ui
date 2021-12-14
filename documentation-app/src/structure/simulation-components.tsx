import { prepareURLPrefixComponents } from './url-prefix';
import { IEntityCategory } from 'maincode-ui';
import { functionsCannonDocumentation } from '../pages/component-pages/simulation/math/functions-cannon/documentation-page';
import { simulationContainerDocumentation } from '../pages/component-pages/simulation/simulation-container/documentation-page';

export const simulationComponentPages: IEntityCategory = prepareURLPrefixComponents({
  title: 'Simulation Components',
  pages: [
    {
      url: '/functions-cannon',
      title: 'Functions Cannon',
      preview: { element: 'Lets put a picture of the cannon' },
      ...functionsCannonDocumentation,
    },
    {
      url: '/simulation-container',
      title: 'Simulation Container',
      preview: { element: '(use pretty list as example) Contains quadratic size, uses ref and children to control loading, has no demo but is used in all sims' },
      ...simulationContainerDocumentation,
    },
  ],
});
