import { IDocumentationPageContent } from 'maincode-ui';
import { guidePages } from './guides';
import { basicComponentPages } from './basic-components';

export const urlPrefix = '/maincode-ui'; // Accounts for the prefix in hosting paths, such as github.io/maincode-ui/.

export type IPreview = {
  picture?: string;
  element?: JSX.Element;
};

export type IDocumentationPage = IDocumentationPageContent & {
  url: string;
  title: string;
  preview?: IPreview;
  iosIcon?: string;
  mdIcon?: string;
};

export type IComponentCategoryPages = {
  title: string;
  pages: IDocumentationPage[];
};

export const allPages: IDocumentationPage[] = [...guidePages, ...basicComponentPages.pages];
export const allComponentCategoryPages: IComponentCategoryPages[] = [basicComponentPages];
