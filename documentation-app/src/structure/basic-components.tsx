import React from 'react';
import { InfoArea, PrettyList, IEntityCategory } from 'maincode-ui';
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
      url: '/pretty-list',
      title: 'Pretty List',
      preview: { element: <PrettyList ordering='alphabetic' items={['Mark er nice', 'Mark er noob', 'Mark er optical illusion']} /> },
      description: <p>Displays a list of elements akin to either the ol or the ul HTML element.</p>,
      codeExamples: [
        {
          title: 'Title',
          description: <p>Description</p>,
          code: "<PrettyList ordering='alphabetic' items={['Mark er nice', 'Mark er noob', 'Mark er optical illusion']} />",
          scope: { PrettyList },
        },
      ],
      props: [
        { title: 'items', description: 'The list items', required: true, type: '(React.ReactNode | string)[]', defaultValue: '[]' },
        { title: 'isOrdered', description: 'Whether or not the list items are ordered', required: false, type: 'boolean', defaultValue: 'false' },
      ],
      styles: [
        { propertyName: `<code>glass-bg</code>`, description: 'This is a glass effect on the background' },
        { propertyName: `<code>theme-border</code>`, description: 'Border matching the theme' },
      ],
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
