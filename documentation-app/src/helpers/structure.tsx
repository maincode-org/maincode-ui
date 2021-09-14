import { heartOutline, heartSharp, colorPaletteOutline, colorPaletteSharp, contrastOutline, contrastSharp, gitMergeOutline, gitMergeSharp, rocketOutline, rocketSharp } from 'ionicons/icons';
import { IDocumentationPageContent } from 'maincode-ui';

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
    props: [{ propTitle: 'animated', description: 'If true, the alert will animate', attribute: 'animated', type: 'boolean', default: 'true' }],
  },
  {
    url: '/QuickStart',
    title: 'Quickstart',
    iosIcon: rocketOutline,
    mdIcon: rocketSharp,
    description: <p>This is the quickstart description</p>,
    examples: [],
    props: [],
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
