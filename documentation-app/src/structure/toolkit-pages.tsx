import { IEntityCategory } from 'maincode-ui';
import { prepareURLPrefixComponents } from './url-prefix';
import { mathToolkitPageDocumentation } from '../pages/toolkit-pages/math/documentation-page';
import { animationToolkitPageDocumentation } from '../pages/toolkit-pages/animation/documentation-page';
import { drawingToolkitPageDocumentation } from '../pages/toolkit-pages/drawing/documentation-page';

export const toolkitPages: IEntityCategory = prepareURLPrefixComponents({
  title: 'Toolkits',
  pages: [
    {
      url: '/math-toolkit',
      title: 'Math Toolkit',
      ...mathToolkitPageDocumentation,
    },
    {
      url: '/animation-toolkit',
      title: 'Animation Toolkit',
      ...animationToolkitPageDocumentation,
    },
    {
      url: '/drawing-toolkit',
      title: 'Drawing Toolkit',
      ...drawingToolkitPageDocumentation,
    },
  ],
});
