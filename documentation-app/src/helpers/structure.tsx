import { heartOutline, heartSharp, colorPaletteOutline, colorPaletteSharp, contrastOutline, contrastSharp, gitMergeOutline, gitMergeSharp, rocketOutline, rocketSharp } from 'ionicons/icons';

import { IDocumentationPageContent, LiveEditExample } from 'maincode-ui';
import QuickStartContent from '../components/quick-start-content/QuickStartContent';

export type IDocumentationPage = IDocumentationPageContent & {
  url: string;
  title: string;
  iosIcon?: string;
  mdIcon?: string;
};

export const documentationPages: IDocumentationPage[] = [
  {
    url: '/Overview',
    title: 'Overview',
    iosIcon: heartOutline,
    mdIcon: heartSharp,
    description: <p>This is the overview description</p>,
    examples: [],
    props: [{ propTitle: 'Animated', description: `If <code>true</code>, the alert will animate`, attribute: 'animated', type: 'boolean', default: 'true' }],
    styles: [
      { className: `<code>glass-bg</code>`, description: 'This is a glass effect on the background' },
      { className: `<code>theme-border</code>`, description: 'Border matching the theme' },
    ],
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

export const componentPages: IDocumentationPage[] = [
  {
    url: '/Component1',
    title: 'Component1',
    description: <p>This is a description for component 1</p>,
    customContent: <LiveEditExample />,
  },
  {
    url: '/Component2',
    title: 'Component2',
    description: <p>This is a description for component 2</p>,
  },
];
