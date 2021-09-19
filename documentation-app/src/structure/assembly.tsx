import { IDocumentationPageContent, LiveCodeEditor, jsxExample, CopyArea } from 'maincode-ui';
import { heartOutline, heartSharp, colorPaletteOutline, colorPaletteSharp, contrastOutline, contrastSharp, gitMergeOutline, gitMergeSharp, rocketOutline, rocketSharp } from 'ionicons/icons';
import { IonButton } from '@ionic/react';

import QuickStartContent from '../pages/guide-pages/quick-start-page/documentation-page';
import { makeOverviewContent } from '../pages/guide-pages/overview-page/documentation-page';

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
  icon?: string;
  pages: IDocumentationPage[];
};

export const componentPages: IDocumentationPage[] = [
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
    url: '/Component3',
    title: 'Component 3',
    description: <p>This is a teaser for component 2. They got a hang of a long text right? Is this really how they made it? I had to put max-width on the card container.</p>,
    preview: {
      element: <IonButton onClick={() => alert('Mark er noob')}>Mark tester mig</IonButton>,
    },
  },
];

export const documentationPages: IDocumentationPage[] = [
  {
    url: '/Overview',
    title: 'Overview',
    iosIcon: heartOutline,
    mdIcon: heartSharp,
    description: <p>This is the overview description</p>,
    customContent: makeOverviewContent(componentPages),
  },
  {
    url: '/QuickStart',
    title: 'Quickstart',
    iosIcon: rocketOutline,
    mdIcon: rocketSharp,
    description: (
      <p>
        To get started you need to install the node package <code>maincode-ui</code>
      </p>
    ),
    customContent: QuickStartContent,
  },
  {
    url: '/Theming',
    title: 'Theming',
    iosIcon: colorPaletteOutline,
    mdIcon: colorPaletteSharp,
    description: <p>This is the theming description</p>,
    examples: [],
    props: [],
  },
  {
    url: '/DarkMode',
    title: 'Dark Mode',
    iosIcon: contrastOutline,
    mdIcon: contrastSharp,
    description: <p>This is the dark mode description</p>,
    examples: [],
    props: [],
  },
  {
    url: '/Contributing',
    title: 'Contributing',
    iosIcon: gitMergeOutline,
    mdIcon: gitMergeSharp,
    description: <p>This is the contributions description</p>,
    examples: [],
    props: [],
  },
];
