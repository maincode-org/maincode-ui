import React from 'react';
import { CopyArea, LiveCodeEditor, jsxExample, IComponentCategoryPages } from 'maincode-ui';
import liveCodeEditorDark from 'assets/LiveCodeEdit-dark.png';
import liveCodeEditorLight from 'assets/LiveCodeEdit-light.png';
import { prepareURLPrefixComponents } from './url-prefix';

export const basicComponentPages: IComponentCategoryPages = prepareURLPrefixComponents({
  title: 'Basic Components',
  pages: [
    {
      url: '/copy-area',
      title: 'Copy Area',
      preview: { element: <CopyArea command={'npm install maincode-ui'} /> },
      description: <p>Displays single commands with controls for seamless clipboard copying</p>,
      props: [{ propTitle: 'Animated', description: `If <code>true</code>, the alert will animate`, attribute: 'animated', type: 'boolean', default: 'true' }],
      styles: [
        { className: `<code>glass-bg</code>`, description: 'This is a glass effect on the background' },
        { className: `<code>theme-border</code>`, description: 'Border matching the theme' },
      ],
    },
    {
      url: '/live-code-editor',
      title: 'Live Code Editor',
      description: <p>Play around with the Maincode UI components and get instant feedback. </p>,
      preview: {
        picture: liveCodeEditorLight,
        darkModePicture: liveCodeEditorDark,
      },
      customContent: <LiveCodeEditor code={jsxExample} noInline={true} />,
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
