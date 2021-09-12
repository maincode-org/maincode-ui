import { heartOutline, heartSharp, colorPaletteOutline, colorPaletteSharp, contrastOutline, contrastSharp, gitMergeOutline, gitMergeSharp, rocketOutline, rocketSharp } from 'ionicons/icons';

export type IComponentDocumentation = {
  url: string;
  title: string;
  iosIcon: string;
  mdIcon: string;
  description: JSX.Element;
  examples: IComponentUsage[];
  props: IPropertyDetail[];
  styles?: IStyleDetail[];
};

type IComponentUsage = {};

type IPropertyDetail = {};

type IStyleDetail = {};

export const components: IComponentDocumentation[] = [
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
