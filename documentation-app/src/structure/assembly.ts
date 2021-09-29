import { guidePages } from './guides';
import { basicComponentPages } from './basic-components';
import { IDocumentationPage, IEntityCategory } from 'maincode-ui';
import { simulationComponentPages } from './simulation-components';

export const allPages: IDocumentationPage[] = [...guidePages, ...basicComponentPages.pages, ...simulationComponentPages.pages];
export const allComponentCategoryPages: IEntityCategory[] = [basicComponentPages, simulationComponentPages];
