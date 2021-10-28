import React from 'react';
import { InfoArea, IEntityCategory } from 'maincode-ui';
import { prepareURLPrefixComponents } from './url-prefix';
import { infoAreaPageDocumentation } from '../pages/component-pages/basic/info-area-page/documentation-page';

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
      url: '/component-3',
      title: 'Component 3',
      description: <p>This is a teaser for component 2. They got a hang of a long text right? Is this really how they made it? I had to put max-width on the card container.</p>,
      preview: {
        picture: 'https://i.picsum.photos/id/12/1000/1000.jpg?hmac=rd7CBVhclToSFt6oDC9OPLQiV4x08Geesh3ONi36e8c',
      },
    },
  ],
});
