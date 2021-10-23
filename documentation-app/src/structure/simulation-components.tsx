import { prepareURLPrefixComponents } from './url-prefix';
import { IEntityCategory } from 'maincode-ui';
import { liveEditorPreview } from '../pages/component-pages/code/live-editor-page/documentation-page';
import { functionsCannonDocumentation } from '../pages/component-pages/simulation/math/functions-cannon/documentation-page';

export const simulationComponentPages: IEntityCategory = prepareURLPrefixComponents({
  title: 'Simulation Components',
  pages: [
    {
      url: '/functions-cannon',
      title: 'Functions Cannon',
      preview: liveEditorPreview,
      ...functionsCannonDocumentation,
    },
  ],
});
