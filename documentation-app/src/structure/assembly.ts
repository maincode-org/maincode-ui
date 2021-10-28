import { guidePages } from './guide-pages';
import { basicComponentPages } from './basic-components';
import { codeComponentPages } from './code-components';
import { IDocumentationPage, IEntityCategory } from 'maincode-ui';
import { simulationComponentPages } from './simulation-components';

export const allPages: IDocumentationPage[] = [...guidePages, ...basicComponentPages.pages, ...codeComponentPages.pages, ...simulationComponentPages.pages];
export const allComponentCategoryPages: IEntityCategory[] = [basicComponentPages, codeComponentPages, simulationComponentPages];
