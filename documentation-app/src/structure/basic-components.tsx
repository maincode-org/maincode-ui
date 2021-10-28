import React from 'react';
import { InfoArea, PrettyList, IEntityCategory } from 'maincode-ui';
import { prepareURLPrefixComponents } from './url-prefix';
import { infoAreaPageDocumentation } from '../pages/component-pages/basic/info-area-page/documentation-page';
import { prettyListPageDocumentation } from '../pages/component-pages/basic/pretty-list/documentation-page';

export const basicComponentPages: IEntityCategory = prepareURLPrefixComponents({
  title: 'Basic Components',
  pages: [
    {
      url: '/info-area',
      title: 'Info Area',
      preview: { element: <InfoArea>Example of InfoArea</InfoArea> },
      ...infoAreaPageDocumentation,
    },
    {
      url: '/pretty-list',
      title: 'Pretty List',
      preview: { element: <PrettyList ordering='alphabetic' items={['List item 1', 'List item 2', 'List item 3']} /> },
      ...prettyListPageDocumentation,
    },
  ],
});
