import React from 'react';
import { CopyArea, LiveCodeEditor, jsxExample } from 'maincode-ui';
import { IComponentCategoryPages } from './assembly';

const liveCodeEditorExample = `
<div className='mt-4'>
  <CopyArea command='npm install maincode-ui' />
</div>
`;

export const basicComponentPages: IComponentCategoryPages = {
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
      url: '/Component2',
      title: 'Component 2',
      description: <p>This is a teaser for component 2. They got a hang of a long text right? Is this really how they made it? I had to put max-width on the card container.</p>,
      preview: {
        picture: 'https://i.picsum.photos/id/12/1000/1000.jpg?hmac=rd7CBVhclToSFt6oDC9OPLQiV4x08Geesh3ONi36e8c',
      },
      customContent: <LiveCodeEditor code={jsxExample} isDarkMode={true} noInline={true} />,
    },
    {
      url: '/LiveCodeEditor',
      title: 'Live Code Editor',
      description: <p>Live Edit component code to play around with the Maincode UI component with instant feedback. </p>,
      preview: {
        element: <LiveCodeEditor scope={{ CopyArea }} isDarkMode={true} code={liveCodeEditorExample} />,
      },
    },
  ],
};
