import { heartOutline, heartSharp, colorPaletteOutline, colorPaletteSharp, contrastOutline, contrastSharp, gitMergeOutline, gitMergeSharp, rocketOutline, rocketSharp } from 'ionicons/icons';

export type IDocumentationPage = {
  url: string;
  title: string;
  iosIcon: string;
  mdIcon: string;
  description?: JSX.Element;
  examples?: IComponentUsage[];
  customContent?: JSX.Element;
  props?: IPropertyDetail[];
  styles?: IStyleDetail[];
  outro?: JSX.Element;
};

type IComponentUsage = {};

type IPropertyDetail = {};

type IStyleDetail = {};

export const documentationPages: IDocumentationPage[] = [
  {
    url: '/Overview',
    title: 'Overview',
    iosIcon: heartOutline,
    mdIcon: heartSharp,
    description: <p>This is the description</p>,
    examples: [],
    props: [],
  },
  {
    url: '/QuickStart',
    title: 'Quickstart',
    iosIcon: rocketOutline,
    mdIcon: rocketSharp,
    description: <p>This is the description</p>,
    examples: [],
    props: [],
  },
  {
    url: '/Theming',
    title: 'Theming',
    iosIcon: colorPaletteOutline,
    mdIcon: colorPaletteSharp,
    description: <p>This is the description</p>,
    examples: [],
    props: [],
  },
  {
    url: '/DarkMode',
    title: 'Dark Mode',
    iosIcon: contrastOutline,
    mdIcon: contrastSharp,
    description: <p>This is the description</p>,
    examples: [],
    props: [],
  },
  {
    url: '/Contributing',
    title: 'Contributing',
    iosIcon: gitMergeOutline,
    mdIcon: gitMergeSharp,
    description: <p>This is the description</p>,
    examples: [],
    props: [],
  },
];
