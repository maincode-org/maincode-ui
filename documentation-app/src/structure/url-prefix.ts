import { IDocumentationPage, IEntityCategory } from 'maincode-ui';
export const urlPrefix = '/maincode-ui'; // Accounts for the prefix in hosting paths, such as github.io/maincode-ui/.

export const prepareURLPrefixComponents = (componentPages: IEntityCategory): IEntityCategory => ({
  ...componentPages,
  pages: componentPages.pages.map((c) => ({ ...c, url: `${urlPrefix}${c.url}` })),
});
export const prepareURLPrefixGuides = (guides: IDocumentationPage[]): IDocumentationPage[] => guides.map((g) => ({ ...g, url: `${urlPrefix}${g.url}` }));
