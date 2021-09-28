import { guidePages } from './guides';
import { basicComponentPages } from './basic-components';
import { IDocumentationPage, IEntityCategory } from 'maincode-ui';

export const allPages: IDocumentationPage[] = [...guidePages, ...basicComponentPages.pages];
export const allComponentCategoryPages: IEntityCategory[] = [basicComponentPages];
