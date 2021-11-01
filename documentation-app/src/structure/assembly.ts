import { guidePages } from './guide-pages';
import { basicComponentPages } from './basic-components';
import { codeComponentPages } from './code-components';
import { IDocumentationPage, IEntityCategory } from 'maincode-ui';
import { simulationComponentPages } from './simulation-components';
import { documentationComponentPages } from './documentation-components';
import { layoutComponentPages } from './layout-components';

export const allPages: IDocumentationPage[] = [
  ...guidePages,
  ...basicComponentPages.pages,
  ...codeComponentPages.pages,
  ...documentationComponentPages.pages,
  ...layoutComponentPages.pages,
  ...simulationComponentPages.pages,
];
export const allComponentCategoryPages: IEntityCategory[] = [basicComponentPages, codeComponentPages, documentationComponentPages, layoutComponentPages, simulationComponentPages];
