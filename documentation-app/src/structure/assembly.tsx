import { guidePages } from './guides';
import { basicComponentPages } from './basic-components';
import { IDocumentationPage, IComponentCategoryPages } from 'maincode-ui';

export const urlPrefix = '/maincode-ui'; // Accounts for the prefix in hosting paths, such as github.io/maincode-ui/.

export const allPages: IDocumentationPage[] = [...guidePages, ...basicComponentPages.pages];
export const allComponentCategoryPages: IComponentCategoryPages[] = [basicComponentPages, basicComponentPages];
