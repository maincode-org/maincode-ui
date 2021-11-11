import { guidePages } from './guide-pages';
import { basicComponentPages } from './basic-components';
import { codeComponentPages } from './code-components';
import { IDocumentationPage, IEntityCategory } from 'maincode-ui';
import { simulationComponentPages } from './simulation-components';
import { documentationComponentPages } from './documentation-components';
import { layoutComponentPages } from './layout-components';
import { pageComponentPages } from './page-components';
import { toolkitPages } from './toolkit-pages';

export const allPages: IDocumentationPage[] = [
  ...guidePages,
  ...basicComponentPages.pages,
  ...codeComponentPages.pages,
  ...documentationComponentPages.pages,
  ...layoutComponentPages.pages,
  ...pageComponentPages.pages,
  ...simulationComponentPages.pages,
  ...toolkitPages.pages,
];

export const allComponentCategoryPages: IEntityCategory[] = [
  toolkitPages,
  basicComponentPages,
  codeComponentPages,
  documentationComponentPages,
  layoutComponentPages,
  pageComponentPages,
  simulationComponentPages,
];
