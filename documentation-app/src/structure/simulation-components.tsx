import { prepareURLPrefixComponents } from './url-prefix';
import { IEntityCategory } from 'maincode-ui';
import { functionsCannonDocumentation, mathFunctionsCannonPreview } from '../pages/component-pages/simulation/math/functions-cannon/documentation-page';
import { simulationContainerDocumentation } from '../pages/component-pages/simulation/simulation-container/documentation-page';

export const simulationComponentPages: IEntityCategory = prepareURLPrefixComponents({
  title: 'Simulation Components',
  pages: [
    {
      url: '/functions-cannon',
      title: 'Functions Cannon',
      preview: mathFunctionsCannonPreview,
      ...functionsCannonDocumentation,
    },
    {
      url: '/simulation-container',
      title: 'Simulation Container',
      preview: { element: <p>This component makes all our simulations quadratic and controls their internal mounting.</p> },
      ...simulationContainerDocumentation,
    },
  ],
});
