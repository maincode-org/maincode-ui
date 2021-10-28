import React from 'react';
import { CopyArea, PrettyList, IEntityCategory } from 'maincode-ui';
import { prepareURLPrefixComponents } from './url-prefix';
import { liveEditorDocumentation, liveEditorPreview } from '../pages/component-pages/code/live-editor-page/documentation-page';

export const basicComponentPages: IEntityCategory = prepareURLPrefixComponents({
  title: 'Basic Components',
  pages: [
    {
      url: '/copy-area',
      title: 'Copy Area',
      preview: { element: <CopyArea command={'npm install maincode-ui'} /> },
      description: <p>Displays single commands with controls for seamless clipboard copying</p>,
      props: [{ title: 'Animated', description: `If <code>true</code>, the alert will animate`, required: true, type: 'boolean', defaultValue: 'true' }],
      styles: [
        { propertyName: `<code>glass-bg</code>`, description: 'This is a glass effect on the background' },
        { propertyName: `<code>theme-border</code>`, description: 'Border matching the theme' },
      ],
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
      url: '/live-code-editor',
      title: 'Live Code Editor',
      preview: liveEditorPreview,
      ...liveEditorDocumentation,
    },
  ],
});
