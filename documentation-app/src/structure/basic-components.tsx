import { InfoArea, PrettyList, MathLive, IEntityCategory } from 'maincode-ui';
import { prepareURLPrefixComponents } from './url-prefix';
import { infoAreaPageDocumentation } from '../pages/component-pages/basic/info-area/documentation-page';
import { prettyListPageDocumentation } from '../pages/component-pages/basic/pretty-list/documentation-page';
import { mathLivePageDocumentation } from '../pages/component-pages/basic/math-live/documentation-page';

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
    {
      url: '/math-live',
      title: 'Math Live',
      preview: { element: <MathLive formula='f(x)=4x³+5' /> },
      ...mathLivePageDocumentation,
    },
  ],
});
